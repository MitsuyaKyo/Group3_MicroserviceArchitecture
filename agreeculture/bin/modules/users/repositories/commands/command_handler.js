'use strict';

const Users = require('./domain');

const register = async (payload) => {
    const users = new Users();
    const postCommand = async (payload) => {
        return await users.registerUser(payload);
    }
    return postCommand(payload);
}

const postOneUsers = async (payload) => {
    const users = new Users();
    const postCommand = async (payload) => {
        return await users.addNewUsers(payload);
    }
    return postCommand(payload);
}

const putOneUsers = async (id, payload) => {
    const users = new Users();
    const putCommand = async (id, payload) => {
        return await users.updateDataUsers(id, payload);
    }
    return putCommand(id, payload);
}

const deleteOneUsers = async (id) => {
    const users = new Users();
    const putCommand = async (id) => {
        return await users.deleteDataUsers(id);
    }
    return putCommand(id);
}

module.exports = {
    postOneUsers : postOneUsers,
    putOneUsers : putOneUsers,
    deleteOneUsers: deleteOneUsers,
    register:   register
}