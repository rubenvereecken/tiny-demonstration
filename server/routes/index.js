export default function(app) {
  app.use('/api/tiny', require('./tiny').default);
}
