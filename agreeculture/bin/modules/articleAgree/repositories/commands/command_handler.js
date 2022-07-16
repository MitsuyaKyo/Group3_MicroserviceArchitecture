'use strict';

const wrapper = require('../../../../helpers/utils/wrapper');
const Emitter = require('../../../../helpers/events/event_emitter');
const Article = require('./domain');

const postArticle = async (payload) => {
    const article = new Article();
    const postCommand = async (payload) => {
        return await article.addNewArticle(payload);
    }
    return await postCommand(payload);
}

module.exports = {
    postArticle : postArticle
}