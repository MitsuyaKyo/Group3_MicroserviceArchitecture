'use strict';

const wrapper = require('../../../../helpers/utils/wrapper');
const Emitter = require('../../../../helpers/events/event_emitter');
const User = require('./domain');

const postDataLogin = async (payload) => {
    const user = new User();
    const postCommand = async (payload) => {
        return await user.generateCredential(payload);
    }
    return await postCommand(payload);
}

module.exports = {
    postDataLogin : postDataLogin
}