'use strict';


const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');

class Article{
    constructor(param){
        this.title = param.title;
        this.author = param.author;
        this.article_file = param.article_file;

    }
    async viewOneArticle(){
        const param = {"title":this.title};
        const result = await query.findOneArticle(param);

        if(result.err){
            return result;
        }else{
            return wrapper.data(result.data);
        }
    }
    async viewManyArticle(){
        const param = {};
        const result = await query.findManyArticle(param);

        if(result.err){
            return result;
        }else{
            return wrapper.data(result.data);
        }
    }

}

module.exports = Article;