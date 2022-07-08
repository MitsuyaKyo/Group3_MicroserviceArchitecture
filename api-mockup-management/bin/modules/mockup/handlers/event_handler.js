'use strict';

const Emitter = require('../../../helpers/events/event_emitter');
const commandHandler = require('../repositories/commands/command_handler');
const denormalizer = require('../workers/denormalizer');
const rp = require('request-promise');

const mockupCreatedHandler = async (payload) => {
    const result = await denormalizer.createOneMockupView(payload);
    if (result.err) {
        Emitter.emitEvent(`error`, result.err);
    }  
}

module.exports = {
    mockupCreatedHandler: mockupCreatedHandler
}