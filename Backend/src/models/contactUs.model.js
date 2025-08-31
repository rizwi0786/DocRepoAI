const { callDbFunction } = require('../utils/dbFunctionCaller');

const sendContactUSform = async (name, email, message) => {
    return await callDbFunction('fn_post_contact_us', [name, email, message]);
}

module.exports = {
    sendContactUSform
};