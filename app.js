//importing modules
var server = require('./server');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('server started at port: ' + port);
});

