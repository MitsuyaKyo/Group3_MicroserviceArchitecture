'use strict';

const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');

class Users{
    constructor(param){
        this.idUser = param.idUser;
        this.email = param.email;
        this.password = param.password;
        this.name = param.name;
        this.location = param.location;
        this.titleJob = param.titleJob;
        this.biodata = param.biodata;
        this.facebook = param.facebook;
        this.instagram = param.instagram;
        this.linkedIn = param.linkedIn;
        this.createdAt = param.createdAt;
        this.updatedAt = param.updatedAt;
    }

    async viewUsers(){
        const param = {};
        const result = await query.findUsers(param);

        if(result.err){
            return result;
        }else{
            return wrapper.data(result.data);
        }
    }

    async viewOneUsers(){
        const param = {"idUser":this.idUser};
        const result = await query.findOneUsers(param);

        if(result.err){
            return result;
        }else{
            return wrapper.data(result.data);
        }
    }

    async login(){
        const param = {"email":this.email, "password": this.password};
        const result = await query.findOneUsers(param);
        
        if(result.err){
            return result;
        }else{
            return wrapper.data(result.data);
        }
    }
}

module.exports = Users;