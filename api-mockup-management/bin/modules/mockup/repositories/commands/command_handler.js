'use strict';

const wrapper = require('../../../../helpers/utils/wrapper');
const validator = require('../../utils/validator');
const Emitter = require('../../../../helpers/events/event_emitter');
const Mockup = require('./domain');

const postOneMockup = async (payload) => {
    const validateIfExist = await validator.ifExistMockup(payload);
    const mockup = new Mockup();
    const postCommand = async (payload) => {
        return await mockup.addNewMockup(payload);
    }
    const publishEvent = async (result) => {
        if(result.err) {
            Emitter.emitEvent('error',result.err);
            return result;     
        }else{
            return await mockup.publishNewMockup(result);  
        }
    }
    return await publishEvent(await postCommand(payload));
}

module.exports = {
    postOneMockup : postOneMockup
}