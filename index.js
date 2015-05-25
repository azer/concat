var loop = require("serial-loop");
var fs = require("fs"),
  stream = require('stream');

module.exports = concat;

function concat (files, dest, callback) {
  
  var destIsStream = (dest instanceof stream.Writable);
  var wstream = destIsStream ? dest : fs.createWriteStream(dest);

  loop(files.length, each, function(){
    // Close the stream if this function spawned it
    if (!destIsStream) wstream.end();
    callback();
  });

  function each (done, i) {
    var rstream = fs.createReadStream(files[i]);
    rstream.pipe(wstream, {end: false});
    rstream.on('end', done);
  }
}
