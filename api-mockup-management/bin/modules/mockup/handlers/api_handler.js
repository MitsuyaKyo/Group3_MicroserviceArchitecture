'use strict';

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
const queryParser = require('../utils/query_parser');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

const getOneMockup = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetOneMockup(queryParam);
  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getOneMockup(queryParam);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await getRequest(validateParam));
}

const getOneMockupMySQL = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetOneMockup(queryParam);
  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getOneMockupMySQL(queryParam);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await getRequest(validateParam));
}

const postOneMockup = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneMockup(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.postOneMockup(payload);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await postRequest(validateParam));
}

module.exports = {
  getOneMockup: getOneMockup,
  getOneMockupMySQL: getOneMockupMySQL,
  postOneMockup: postOneMockup
}