const fs = require('fs');
const crypto = require('crypto');

function findDuplicateFiles(startingDirectory) {
  var filesSeenAlready = {};
  var stack = [startingDirectory];

  var duplicates = [];

  while (stack.length) {

      var currentPath = stack.pop();
      var currentFile = fs.statSync(currentPath);

      // if it's a directory,
      // put the contents in our stack
      if (currentFile.isDirectory()) {
          fs.readdirSync(currentPath).forEach(function(path) {
              stack.push(currentPath + '/' + path);
          });

      // if it's a file
      } else {

          // get its hash
          var fileHash = sampleHashFile(currentPath);

          // get its last edited time
          var currentLastEditedTime = currentFile.mtime;

          // if we've seen it before
          if (filesSeenAlready.hasOwnProperty(fileHash)) {

              var existingFile = filesSeenAlready[fileHash];

              if (currentLastEditedTime > existingFile.lastEditedTime) {

                  // current file is the dupe!
                  duplicates.push([currentPath, existingFile.path]);

              } else {

                  // old file is the dupe!
                  duplicates.push([existingFile.path, currentPath]);

                  // but also update the object to have the new file's info
                  filesSeenAlready[fileHash] = {lastEditedTime: currentLastEditedTime, path: currentPath};
              }

          // if it's a new file, throw it in filesSeenAlready
          // and record its path and last edited time,
          // so we can tell later if it's a dupe
          } else {
              filesSeenAlready[fileHash] = {lastEditedTime: currentLastEditedTime, path: currentPath};
          }
      }
  }

  return duplicates;
}

function sampleHashFile(path) {
  const file = fs.statSync(path);

  const sampleSize = 4000;
  const totalBytes = file.size;

  const hash = crypto.createHash('sha512');

  // if the file is too short to take 3 samples, hash the entire file
  if (totalBytes < sampleSize * 3) {
      hash.update(fs.readFileSync(path));

  } else {
      const numBytesBetweenSamples = (totalBytes - sampleSize * 3) / 2;

      var buffer = new Buffer(sampleSize * 3);

      // read first, middle, and last bytes
      for (var offsetMultiplier = 0; offsetMultiplier <= 2; offsetMultiplier++) {
          var fd = fs.openSync(path, 'r');

          var offset   = offsetMultiplier * sampleSize;
          var position = offsetMultiplier * (sampleSize + numBytesBetweenSamples);

          fs.readSync(fd, buffer, offset, sampleSize, position);
      }

      hash.update(buffer);
  }

  return hash.digest();
}
