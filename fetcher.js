const fs = require('fs');
const request = require('request');
const [url, path] = process.argv.slice(2);
let bytes = 0;


request.get(url, (error, resource, body) => {
  if (error) {
    ('error', error);
    return;
  }
  bytes += body.length;
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
  });
});
