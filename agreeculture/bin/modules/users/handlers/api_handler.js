'use strict';

const wrapper = require('../../../helpers/utils/wrapper');
const validator = require('../utils/validator');
const queryHandler = require('../repositories/queries/query_handler');
const commandHandler = require('../repositories/commands/command_handler');

const getUsers = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParam(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getUsers(queryParam);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`);
  }

  sendResponse(await getRequest(validateParam));
}

const getOneUsers = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParam(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getOneUsers(queryParam);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`);
  }

  sendResponse(await getRequest(validateParam));
}

const login = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParam(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getLogin(queryParam);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`);
  }

  sendResponse(await getRequest(validateParam));
}
const register = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParam(payload);

  const postRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.register(payload);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`, 200);
  }

  sendResponse(await postRequest(validateParam));
}

const postOneUsers = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParam(payload);

  const postRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.postOneUsers(payload);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`, 200);
  }

  sendResponse(await postRequest(validateParam));
}

const putOneUsers = async (req, res, next) => {
  const id = req.params;
  const payload = req.body;
  const validateParam = await validator.isValidParam(payload);

  const putRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.putOneUsers(id, payload);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`, 200);
  }
  
  sendResponse(await putRequest(validateParam));
}

const deleteOneUsers = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParam(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.deleteOneUsers(queryParam);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`);
  }

  sendResponse(await getRequest(validateParam));
}

module.exports = {
  getUsers: getUsers,
  getOneUsers: getOneUsers,
  login: login,
  register: register,
  postOneUsers: postOneUsers,
  putOneUsers: putOneUsers,
  deleteOneUsers: deleteOneUsers

}