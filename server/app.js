'use strict';

import express from 'express';
import config from './config';
import http from 'http';
import fs from 'fs';

var app = express();
var server = http.createServer(app);

require('./config/express').default(app);
require('./routes').default(app);

setImmediate(() => {
  app.server = server.listen(config.port || '3030', config.ip || 'localhost', () => {
    console.log('Express running');
  });
});

exports = module.exports = app;
