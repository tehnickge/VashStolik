const express = require('express');
const router = express.Router();    //method of routing
const { 
    getPost, 
    deletePost,
    getEditPost,
    editPost,
    getPosts,
    getAddPost,
    addPost
} = require('../controllers/post-controller');

// router.get('/posts/:id', (req, res) => {
    
// });

router.get('/posts/:id', getPost);

router.delete('/posts/:id', deletePost);

router.get('/edit/:id', getEditPost);

router.put('/edit/:id', editPost);

router.get('/posts', getPosts);

router.get('/add-post', getAddPost);

router.post('/add-post', addPost);

module.exports = router;