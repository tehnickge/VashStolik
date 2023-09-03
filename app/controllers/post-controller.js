const Post = require('../models/post'); // bd
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
    console.log(error);
    res.render(createPath('error'), {title: 'ERROR'});
};

const getPost = (req, res) => {
    const title = 'post';
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('post'), { post, title }))
        .catch((error) => handleError(res, error));
}

const deletePost = (req, res) => {
    const title = 'post';
    Post
        .findByIdAndDelete(req.params.id)
        .then((ressult) => {
            res.sendStatus(200);
        })
        .catch((error) => handleError(res, error));
}

const getEditPost = (req, res) => {
    const title = 'Edit Post';
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('edit-post'), { post, title }))
        .catch((error) => handleError(res, error));
}

const editPost = (req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    Post
        .findByIdAndUpdate(id, { title, author, text }, { new: true })
        .then((ressult) => res.redirect(`/posts/${id}`))
        .catch((error) => handleError(res, error));
}

const getPosts = (req, res) => {
    const title = 'posts';
    Post
        .find()
        .sort({ createdAt: -1})
        .then((posts) => res.render(createPath('posts'), { posts, title }))
        .catch((error) => handleError(res, error));
}

const getAddPost = (req, res) => {
    const title = 'add posts';
    res.render(createPath('add-post'), { title });
}

const addPost = (req, res) => {
    const { title, author, text} = req.body
    const post = new Post({ title, author, text });
    post
        .save()
        .then((ressult) => res.redirect(`/posts/${ressult.id}`))
        .catch((error) => handleError(res, error));
}

module.exports = {
    getPost,
    deletePost,
    getEditPost,
    editPost,
    getPosts,
    getAddPost,
    addPost
}