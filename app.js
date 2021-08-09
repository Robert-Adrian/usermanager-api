const { app, express, port } = require('../usermanager-api/architecture/configurations/configuration');

const routes = require('./architecture/routes/Routes');

app.use(express.json({limit: '1mb'}));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});