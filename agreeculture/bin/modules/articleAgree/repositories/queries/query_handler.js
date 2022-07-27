'use strict';

const Article = require('./domain');

const getOneArticle = async (queryParam) => {
    const getData = async (queryParam) => {
        const article = new Article(queryParam);
        const result = await article.viewOneArticle();
        return result;
    }
    const result = await getData(queryParam);
    return result;
}

const getManyArticle = async (queryParam) => {
    const getData = async (queryParam) => {
        const article = new Article(queryParam);
        const result = await article.viewManyArticle();
        return result;
    }
    const result = await getData(queryParam);
    return result;
}

module.exports = {
    getOneArticle,
    getManyArticle
}