'use strict';

const wrapper = require('../../../../helpers/utils/wrapper');
const Article = require('./domain');

const getOneArticle = async (articleId) => {
    const getData = async () => {
        const article = new Article();
        const result = await article.viewOneArticle(articleId);
        return result;
    }
    const result = await getData();
    return result;
}

const getManyArticle = async (parameter) => {
    const getData = async () => {
        const article = new Article();
        const result = await article.viewManyArticle(parameter);
        return result;
    }
    const result = await getData();
    return result;
}

module.exports = {
    getOneArticle,
    getManyArticle
}