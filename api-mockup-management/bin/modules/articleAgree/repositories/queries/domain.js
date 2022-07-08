'use strict';

const nconf = require('nconf');
const rp = require('request-promise');
const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
const logger = require("../../../../helpers/utils/logger");

class Article{

    async viewOneArticle(articleId){
        const article = await query.findById(articleId);
        const { data } = article
        if(article.err){
            return wrapper.error('error', 'Can not find article!', 404);
        }
        return wrapper.data(data, '', 200);
    }
    async viewManyArticle(parameter){
        const article = await query.findManyArticle(parameter);
        const { data } = article
        if(article.err){
            return wrapper.error('error', 'Can not find any article!', 404);
        }
        return wrapper.data(data, '', 200);
    }

}

module.exports = Article;