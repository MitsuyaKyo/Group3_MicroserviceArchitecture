'use strict';

const wrapper = require('../../../helpers/utils/wrapper');
const commandHandler = require('../repositories/commands/command_handler');
const queryHandler = require('../repositories/queries/query_handler');


const registerAgree = async (req, res, next) => {
  const payload = req.body; 
  const postRequest = async () => {
    return await commandHandler.registerAgree(payload); 
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await postRequest());
}

module.exports = {
  registerAgree,
}