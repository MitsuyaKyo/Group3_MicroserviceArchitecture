'use strict';
const validator = require('../utils/validator');
const wrapper = require('../../../helpers/utils/wrapper');
const commandHandler = require('../repositories/commands/command_handler');
const queryHandler = require('../repositories/queries/query_handler');

const postArticle = async (req, res, next) => {
  const payload = req.body; 
  const validateParam = await validator.isValidParam(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.postArticle(payload); 
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await postRequest(validateParam));
}

const getOneArticle = async (req, res, next) => {
  const articleId = req.params;
  const validateParam = await validator.isValidParam(articleId);
  const getData = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getOneArticle(articleId);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await getData(validateParam));
}

const getManyArticle = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParam(queryParam);
  const getData = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getManyArticle(queryParam);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await getData(validateParam));
}

module.exports = {
  postArticle,
  getOneArticle,
  getManyArticle
}