const Contact = require('../models/contacts'); // bd
const createPath = require('../helpers/create-path');

const getContacts = (req, res) => {
    const title = 'contacts';
    Contact
        .find()
        .then((contacts) => res.render(createPath('contacts'), { contacts, title }))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error'), { title: 'Error'})
        });
}

module.exports = { getContacts }