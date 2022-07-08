'use strict';

const model = require('../repositories/queries/query_model');
const validate = require("validate.js")
const command = require('../repositories/commands/command');

const createOneMockupView = async (payload) => {
    const view = model.generalMockup();
    view.projectName = payload.projectName;
    view.domainName = payload.domainName;
    view.apiName = payload.apiName;
    view.mockup = payload.mockup;
    if(!validate.isEmpty(payload.createdAt)){view.createdAt = payload.createdAt;}
    if(!validate.isEmpty(payload.createdBy)){view.createdBy = payload.createdBy;}
    if(!validate.isEmpty(payload.updatedAt)){view.updatedAt = payload.updatedAt;}
    if(!validate.isEmpty(payload.updatedBy)){view.updatedBy = payload.updatedBy;}
    const document = view;  
    const result = await command.insertOneMockupView(document);
    return result;
}

module.exports = {
    createOneMockupView: createOneMockupView
}