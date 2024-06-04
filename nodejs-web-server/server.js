const http = require('http');

const requiestListener = (request, response) => {
  response.setHeader('Content-Type', 'aplication/json');
  response.setHeader('Powered-By', 'Node.JS');
  // response.statuscode = 200;

  const { method, url } = request;

  if (url === '/') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end('<h1>ini adalah method GET</h1>');
    } else {
      response.statusCode = 400;
      response.end(`<h1>halaman tidak dapat diakses dengan ${method} request</h1>`);
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end('<h1>Halo! Ini adalah halaman about</h1>');
    } else if (method === 'POST') {
      let body = [];

      response.on('data', (chunk) => {
        body.push(chunk);
      });

      response.on('end', () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
    } else {
      response.statusCode = 400;
      response.end(`<h1>halaman tidak dapat diakses dengan ${method} request</h1>`);
    }
  } else {
    response.statusCode = 404;
    response.end('<h1>Halaman tidak ditemukan</h1>');
  }

  //   if (method === 'GET') {
  //     response.end('<h1>ini adalah method GET</h1>');
  //   }

  //   if (method === 'POST') {
  //     let body = [];

  //     request.on('data', (chunk) => {
  //       body.push(chunk);
  //     });

  //     request.on('end', () => {
  //       body = Buffer.concat(body).toString();
  //       const {name} = JSON.parse(body);
  //       response.end(`<h1>Hai, ${name}</h1>`);
  //     });
  //   }
};

const server = http.createServer(requiestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Linkstart http://${host}:${port}`);
});
