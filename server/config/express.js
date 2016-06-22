import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import path from 'path';
import config from './index';


export default (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());


  console.log(config.root);
  app.use(express.static(path.join(config.root, 'build')));
  // app.use(express.static(path.join(config.root, 'client')));
  app.use('/node_modules', express.static(path.join(config.root, 'node_modules')));
  app.use(morgan('dev'));
}
