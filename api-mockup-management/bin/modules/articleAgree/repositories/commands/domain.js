'use strict';

const nconf = require('nconf');
const command = require('./command');
const query = require('../queries/query');
const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
const logger = require("../../../../helpers/utils/logger");
const jwtAuth = require('../../../../auth/jwt_auth_helper');
const commonUtil = require('../../../../helpers/utils/common');
const algorithm = 'aes-256-ctr';
const secretKey = 'Dom@in2018';

class Article{
    async addNewArticle(payload){
        const data = [payload];
        let view = model.generalMockup();
        view = data.reduce((accumulator, value) => {
            if(!validate.isEmpty(value.title)){accumulator.title = value.title;}
            if(!validate.isEmpty(value.author)){accumulator.author = value.author;}
            if(!validate.isEmpty(value.article_file)){accumulator.article_file = value.article_file;}        
            return accumulator;
        }, view);
        const document = view;
        const result = await command.insertArticle(document);
        return result;
    }

}

module.exports = Article;