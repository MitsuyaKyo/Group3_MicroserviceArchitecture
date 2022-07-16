'use strict';

const wrapper = require('../../../helpers/utils/wrapper');
const commandHandler = require('../repositories/commands/command_handler');
const queryHandler = require('../repositories/queries/query_handler');

const postArticle = async (req, res, next) => {
  const payload = req.body; 
  const postRequest = async () => {
    return await commandHandler.postArticle(payload); 
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await postRequest());
}

const getOneArticle = async (req, res, next) => {
  const articleId = req.articleId;
  const getData = async () => {
    return await queryHandler.getOneArticle(articleId);
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await getData());
}

const getManyArticle = async (req, res, next) => {
  const getData = async () => {
    return await queryHandler.getManyArticle();
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await getData());
}

module.exports = {
  postArticle,
  getOneArticle,
  getManyArticle
}