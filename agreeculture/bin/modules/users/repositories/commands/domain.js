'use strict';

const model = require('./command_model');
const command = require('./command');
const validate = require('validate.js');

class Users{

    async addNewUsers(payload){
        const data = [payload];
        let view = model.generalUsers();
        view = data.reduce((accumulator, value) => {
            if(!validate.isEmpty(value.idUser)){accumulator.idUser = value.idUser;}
            if(!validate.isEmpty(value.email)){accumulator.email = value.email;}
            if(!validate.isEmpty(value.password)){accumulator.password = value.password;}
            if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
            if(!validate.isEmpty(value.location)){accumulator.location = value.location;}  
            if(!validate.isEmpty(value.titleJob)){accumulator.titleJob = value.titleJob;}
            if(!validate.isEmpty(value.biodata)){accumulator.biodata = value.biodata;}
            if(!validate.isEmpty(value.facebook)){accumulator.facebook = value.facebook;}  
            if(!validate.isEmpty(value.instagram)){accumulator.instagram = value.instagram;}
            if(!validate.isEmpty(value.linkedIn)){accumulator.linkedIn = value.linkedIn;}
            if(!validate.isEmpty(value.createdAt)){accumulator.createdAt = value.createdAt;}
            if(!validate.isEmpty(value.updatedAt)){accumulator.updatedAt = value.updatedAt;}            
            return accumulator;
        }, view);
        const document = view;
        const result = await command.insertOneUsers(document);
        return result;
    }
    async registerUser(payload){
        const data = [payload];
        let view = model.generalUsers();
        view = data.reduce((accumulator, value) => {
            if(!validate.isEmpty(value.email)){accumulator.email = value.email;}
            if(!validate.isEmpty(value.password)){accumulator.password = value.password;}           
            return accumulator;
        }, view);
        const document = view;
        const result = await command.insertOneUsers(document);
        return result;
    }

    async updateDataUsers(param, payload){
        const data = [payload];
        let view = model.generalUsers();
        view = data.reduce((accumulator, value) => {
            if(!validate.isEmpty(value.idUser)){accumulator.idUser = value.idUser;}
            if(!validate.isEmpty(value.email)){accumulator.email = value.email;}
            if(!validate.isEmpty(value.name)){accumulator.name = value.name;}
            if(!validate.isEmpty(value.password)){accumulator.password = value.password;}
            if(!validate.isEmpty(value.location)){accumulator.location = value.location;}  
            if(!validate.isEmpty(value.titleJob)){accumulator.titleJob = value.titleJob;}
            if(!validate.isEmpty(value.biodata)){accumulator.biodata = value.biodata;}
            if(!validate.isEmpty(value.facebook)){accumulator.facebook = value.facebook;}  
            if(!validate.isEmpty(value.instagram)){accumulator.instagram = value.instagram;}
            if(!validate.isEmpty(value.linkedIn)){accumulator.linkedIn = value.linkedIn;}
            if(!validate.isEmpty(value.createdAt)){accumulator.createdAt = value.createdAt;}
            if(!validate.isEmpty(value.updatedAt)){accumulator.updatedAt = value.updatedAt;}          
            return accumulator;
        }, view);
        const document = view;
        const result = await command.updateOneUsers(param, document);
        return result;
    }

    async deleteDataUsers(param){
        const result = await command.deleteOneUsers(param);
        return result;
    }
}

module.exports = Users;