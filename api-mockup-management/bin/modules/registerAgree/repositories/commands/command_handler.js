'use strict';

const wrapper = require('../../../../helpers/utils/wrapper');
const Emitter = require('../../../../helpers/events/event_emitter');
const User = require('./domain');

const registerAgree = async (payload) => {
    const user = new User();
    const registCommand = async (payload) => {
        return await user.register(payload);
    }
    return await registCommand(payload);
}

module.exports = {
    registerAgree : registerAgree
}