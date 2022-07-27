'use strict';

const restify = require('restify');
const project = require('../../package.json');
const basicAuth = require('../auth/basic_auth_helper');
const wrapper = require('../helpers/utils/wrapper');
const corsMiddleware = require('restify-cors-middleware')
const usersHandler = require('../modules/users/handlers/api_handler');
const articleAgreeHandler = require('../modules/articleAgree/handlers/api_handler');


let crossOrigin = (req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    return next();
}

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*'],
    allowHeaders: ['Origin, X-Requested-With, Content-Type, Accept, OPTIONS'],
    exposeHeaders: ['OPTIONS']
})

let AppServer = function(){
    this.server = restify.createServer({
        name: project.name + '-server',
        version: project.version
    });

    this.server.serverKey = '';
    this.server.pre(cors.preflight);
    this.server.use(cors.actual);
    this.server.use(restify.plugins.acceptParser(this.server.acceptable));
    this.server.use(restify.plugins.queryParser());
    this.server.use(restify.plugins.bodyParser());
    this.server.use(restify.plugins.authorizationParser());

    //required for basic auth
    this.server.use(basicAuth.init());
    this.server.use(crossOrigin);

    //anonymous can access the end point, place code bellow
    this.server.get('/', (req, res, next) => {
        wrapper.response(res,`success`,wrapper.data(`Index`),`This service is running properly`);
    });

    //article
    this.server.get('/api/v1/article/', articleAgreeHandler.getManyArticle);
    this.server.get('/api/v1/article/:title', articleAgreeHandler.getOneArticle);
    this.server.post('/api/v1/article', articleAgreeHandler.postArticle);

    //login and register
    this.server.post('/api/v1/register',  usersHandler.register);//basicAuth.isAuthenticated,
    this.server.get('/api/v1/users/:username/:password', basicAuth.isAuthenticated, usersHandler.login);

    // users
    this.server.get('/api/v1/users', usersHandler.getUsers);// basicAuth.isAuthenticated,
    this.server.get('/api/v1/users/:idUser', usersHandler.getOneUsers);// basicAuth.isAuthenticated,
    this.server.post('/api/v1/users',  usersHandler.postOneUsers);//basicAuth.isAuthenticated,
    this.server.put('/api/v1/users/:idUser',  usersHandler.putOneUsers);//basicAuth.isAuthenticated,
    this.server.del('/api/v1/users/:idUser',  usersHandler.deleteOneUsers);//basicAuth.isAuthenticated,

}
 
module.exports = AppServer;