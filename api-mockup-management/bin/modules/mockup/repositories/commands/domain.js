'use strict';

const nconf = require('nconf');
const rp = require('request-promise');
const model = require('./command_model');
const command = require('./command');
const query = require('../queries/query');
const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
const logger = require("../../../../helpers/utils/logger");
const SNS = require('../../../../helpers/components/aws-sns/sns');
const Emitter = require('../../../../helpers/events/event_emitter');
const EventPublisher = require('../../../../helpers/events/event_publisher');

class Mockup{

    async addNewMockup(payload){
        const data = [payload];
        let view = model.generalMockup();
        view = data.reduce((accumulator, value) => {
            if(!validate.isEmpty(value.projectName)){accumulator.projectName = value.projectName;}
            if(!validate.isEmpty(value.domainName)){accumulator.domainName = value.domainName;}
            if(!validate.isEmpty(value.apiName)){accumulator.apiName = value.apiName;}
            if(!validate.isEmpty(value.mockup)){accumulator.mockup = value.mockup;}            
            return accumulator;
        }, view);
        const document = view;
        const result = await command.insertOneMockupEventStore(document);
        return result;
    }

    async publishNewMockup(payload){
        const message = payload.data;
        const eventPublisher = new EventPublisher(`mockupCreated`,message,0,message._id,`mockup`,`create new mockup`);
        const result = await eventPublisher.publishEvent(config.getMockupTopic());        
        if (result.err) {
            Emitter.emitEvent('error',result.err);
            return result;
        } else{
            Emitter.emitEvent('mockupCreated',message);
            return wrapper.data(message,'mockup created',payload.code);
        } 
    }
}

module.exports = Mockup;