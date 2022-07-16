'use strict';

const nconf   = require('nconf');
const AppServer = require('./bin/app/server');
const configs = require('./bin/infra/configs/config');
const mongoConnectionPooling = require('./bin/helpers/databases/mongodb/connection');
const observer = require('./bin/modules/observer');

configs.initEnvironments(nconf);
const cluster = require('node:cluster') ;
const http = require('node:http');
const { cpus } = require('node:os');
const process = require('node:process')

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  const appServer = new AppServer();
  const port = process.env.port || nconf.get('PORT') || 1337;
  appServer.server.listen(port, () => {
      mongoConnectionPooling.init();
      observer.init();
      console.log('%s started, listening at %s', appServer.server.name, appServer.server.url);
  });
  console.log(`Worker ${process.pid} started`);
}