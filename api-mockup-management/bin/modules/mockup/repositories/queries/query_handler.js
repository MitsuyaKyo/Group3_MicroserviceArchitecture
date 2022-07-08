'use strict';

const wrapper = require('../../../../helpers/utils/wrapper');
const validator = require('../../utils/validator');
const Mockup = require('./domain');

const getOneMockup = async (queryParam) => {
    const validateIfExist = await validator.ifExistMockup(queryParam);
    const getQuery = async (queryParam) => {
        const mockup = new Mockup(queryParam);
        const result = await mockup.viewOneMockup();
        return result;
    }
    const result = await getQuery(queryParam);
    return result;
}

const getOneMockupMySQL = async (queryParam) => {
    const validateIfExist = await validator.ifExistMockupMySQL(queryParam);
    const getQuery = async (queryParam) => {
        const mockup = new Mockup(queryParam);
        const result = await mockup.viewOneMockupMySQL();
        return result;
    }
    const result = await getQuery(queryParam);
    return result;
}

module.exports = {
    getOneMockup : getOneMockup,
    getOneMockupMySQL : getOneMockupMySQL
}