'use strict';

const Users = require('./domain');
const Worker = require('node:worker_threads').Worker;

const getUsers = async (queryParam) => {
    const getQuery = async (queryParam) => {
        const users = new Users(queryParam);
        const result = await users.viewUsers();
        return result;
    }

    const result = await getQuery(queryParam);
    return result;
}

const getOneUsers = async (queryParam) => {
    const getQuery = async (queryParam) => {
        const users = new Users(queryParam);
        const result = await users.viewOneUsers();
        return result;
    }

    const result = await getQuery(queryParam);
    return result;
}

const getLogin = async (queryParam) => {
    const getQuery = async (queryParam) => {
        const users = new Users(queryParam);
        const result = await users.login();
        return result;
    }
    
    const result = await getQuery(queryParam);
    return result;
}

module.exports = {
    getUsers : getUsers,
    getOneUsers : getOneUsers,
    getLogin: getLogin
}