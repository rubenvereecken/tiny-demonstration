import path from 'path';

export default {
  env: process.env.NODE_ENV,

  root: path.normalize(path.join(__dirname, '..', '..')),
  port : process.env.PORT,
  ip: process.env.IP,

};
