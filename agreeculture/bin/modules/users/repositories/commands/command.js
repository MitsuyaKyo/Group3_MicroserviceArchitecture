'use strict';

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');

const insertOneUsers = async (document) => {
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('users');
    const result = await db.insertOne(document);
    return result;
}

const updateOneUsers = async (param, document) => {
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('users');
    const result = await db.upsertOne(param ,document);
    return result;
}

const deleteOneUsers = async (param) => {
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('users');
    const result = await db.deleteOne(param);
    return result;
}

module.exports = {
    insertOneUsers: insertOneUsers,
    updateOneUsers: updateOneUsers,
    deleteOneUsers: deleteOneUsers
}