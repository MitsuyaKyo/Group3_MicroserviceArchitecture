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

class userAgree{
    async register(payload){
        const data = [payload];
        let view = model.generalMockup();
        view = data.reduce((accumulator, value) => {
            if(!validate.isEmpty(value.email)){accumulator.email = value.email;}
            if(!validate.isEmpty(value.password)){accumulator.password = value.password;}
            return accumulator;
        }, view);
        const document = view;
        const result = await command.registerUser(document);
        return result;
    }

}

module.exports = userAgree;