var path = require('path');
var http = require('http');
var fs = require('fs')

const dir = path.join(__dirname, 'public/assets/');

var server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  //res.setHeader('Access-Control-Allow-Origin', '*');
  //res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  //res.setHeader("Access-Control-Allow-Headers", "access-control-allow-origin, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  switch (req.method) {
    case 'GET':
      handleGetRequest(req, res);
      break;
    case 'POST':
      handlePostRequest(req, res);
      break;
    case 'OPTIONS':
      res.statusCode = 200;
      res.end();
      break;
    default:
      //Request method not supported
      res.statusCode = 501;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Method not implemented');
  }
});

server.listen(3001, function () {
  console.log('Listening on http://localhost:3001/');
});

function handleGetRequest(req, res) {
  const reqpath = req.url.toString().split('?')[0];
  
  if (reqpath.length === 0 || reqpath === '/' || reqpath === '\\') {
    return constructForbiddenResponse(res);
  }

  //Only support PNG images
  const type = 'image/png';

  const file = path.join(dir, reqpath);
  //Try to open the file and serve it
  const s = fs.createReadStream(file);
  s.on('open', function () {
      res.setHeader('Content-Type', type);
      s.pipe(res);
  });

  //Return an error if we couldn't find the files
  s.on('error', function () {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 404;
      res.end('Not found');
  });
}

function handlePostRequest(req, res) {
  const reqPath = req.url.toString().split('?')[0];
  const requestEndpoint = reqPath.substring(1);
  if (requestEndpoint === 'GetArtGalleryInfo') {

    const files = fs.readdirSync(dir);
    const jsonReturnObjs = [];

    files.forEach((file) => {
      jsonReturnObjs.push({
        imageSource: file,
        artTitle: filenameToArtTitle(file)
      });
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(jsonReturnObjs));

  } else {
    return constructForbiddenResponse(res, requestEndpoint);
  }
}

function constructForbiddenResponse(res, test) {
  res.statusCode = 403;
  res.setHeader('Content-Type', 'text/plain');
  return res.end('Forbidden ' + test);
}

function filenameToArtTitle(filename) {
  return filename.substring(0, filename.length-4).replace(/_/g, " ");
}