'use strict';

const Mongo = require('../../../../helpers/databases/mongodb/db');
const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

//
const registerUser = async (document) => {
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('userAgree');
    const result = await db.insertOne(document);
    return result;
}

module.exports = {
    registerUser
}