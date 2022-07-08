'use strict';

const nconf = require('nconf');
const rp = require('request-promise');
const model = require('./query_model');
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
const logger = require("../../../../helpers/utils/logger");

class Mockup{
    constructor(param){
        this.projectName = param.projectName;
        this.domainName = param.domainName;
        this.apiName = param.apiName;
    }

    async viewOneMockup(){
        const param = {"projectName":this.projectName,"domainName":this.domainName,"apiName":this.apiName};
        const result = await query.findOneMockup(param);
        if(result.err){
            return result;
        }else{
            const data = [result.data];
            let view = model.generalMockup();
            view = data.reduce((accumulator, value) => {
                accumulator = value.mockup;
                return accumulator;
            }, view);
            return wrapper.data(view);
        }
    }

    async viewOneMockupMySQL(){
        const param = {"projectName":this.projectName,"domainName":this.domainName,"apiName":this.apiName};
        const result = await query.findOneMockupMySQL(param);
        if(result.err){
            return result;
        }else{
            result.data = JSON.parse(result.data);
            const data = [result.data];
            let view = model.generalMockup();
            view = data.reduce((accumulator, value) => {
                accumulator.projectName = this.projectName;
                accumulator.domainName = this.domainName;
                accumulator.apiName = this.apiName;
                accumulator.mockup = value.mockup;
                return accumulator;
            }, view);
            return wrapper.data(view);
        }
    }
}

module.exports = Mockup;