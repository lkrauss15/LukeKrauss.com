const path = require('path');
const fs = require('fs')
const express = require('express')
const port = 8080;

const artworkDirectory = path.join(__dirname, 'public/assets/images/artwork');
const hashToFilenameMap = new Map();

const app = express();

app.use(express.static(path.join(__dirname, "..", "src")));
app.use(express.static(path.join(__dirname, "..", "build")));

//Define specific gets before * get
app.get('/AiArtGallery/GetArtwork', (req, res) => {
  return handleGetArtwork(req, res);
});

app.get('/Biography/SelfPortrait', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/images/", "LukeKrauss.jpg"));
});

app.get('/Biography/Resume', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/", "LukeKraussResume.pdf"));
});

app.get('*', (req, res) => {
  //React is a single page application. We always serve index.html.
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.post('/AiArtGallery/GetArtGalleryInfo', (req, res) => {
  return handleGetArtGalleryInfo(res);
});

app.listen(port, () => {
  console.log('Listening on http://localhost:' + port + '/');
});

/**
 * Handles an HTTP GET request and returns a response.
 * 
 * @param {express.ClientRequest} req HTTP request object
 * @param {express.ServerResponse} res HTTP response object 
 * @returns {express.ServerResponse} The result of calling res.end(...)
 */
function handleGetArtwork(req, res) {
  const artwork = req.query.artwork;
  //Clear out beginning slash (if it exists)

  //No request at all, or request parameter hasnt been mapped
  if (!artwork || !hashToFilenameMap.has(artwork)) {
    return constructForbiddenResponse(res);
  }

  const filename = hashToFilenameMap.get(artwork);
  const fullFilePath = path.join(artworkDirectory, filename);

  res.sendFile(fullFilePath);
}

/**
 * Handles a 'GetArtGalleryInfo' POST request from the client.
 * Gets a list of asset filenames (images) and returns them
 * alongside a displayname for them.
 * 
 * @param {express.ClientRequest} res HTTP request object
 * @returns {express.ServerResponse} The result of res.end(...)
 */
function handleGetArtGalleryInfo(res) {
  const files = fs.readdirSync(artworkDirectory);
  const imageDisplayData = [];
  
  const crypto = require('crypto');
  files.forEach((filename) => {
    //Don't really need this to be cryptographically secure, so just use md5
    const hashedFilename = crypto.createHash('md5').update(filename).digest('hex');
    if (!hashToFilenameMap.has(hashedFilename)) {
      hashToFilenameMap.set(hashedFilename, filename);
    }

    imageDisplayData.push({
      artwork: hashedFilename,
      artTitle: filenameToArtTitle(filename)
    });
  });

  res.status(200).json(imageDisplayData);
}

/**
 * Constructs an HTTP forbidden response for requests we don't allow.
 * 
 * @param {express.ClientRequest} res HTTP request object
 * @returns {express.ServerResponse} The result of res.end(...)
 */
function constructForbiddenResponse(res) {
  res.sendStatus(403);
}

/**
 * Given a filename, converts it to an art title for user display.
 * 
 * @param {string} filename the name of an image (artwork)
 * @returns {string} A title based on the filename
 */
function filenameToArtTitle(filename) {
  return filename.substring(0, filename.length-4).replace(/_/g, " ");
}