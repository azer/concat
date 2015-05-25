var concat = require("../");
var test = require("prova");
var fs = require("fs")
	stream = require('stream');

var nlChar = require('os').EOL;

test('concat', function (assert) {
  assert.plan(3);
  concat(['./test/a', './test/b', './test/c'], './test/all', function (error) {
    assert.error(error);

    fs.readFile('./test/all', function (error, all) {
      assert.error(error);
      assert.equal(all.toString(), 'this is a' + nlChar + 'this is b' + nlChar +
      	'and this is c' + nlChar);
    });
  });
});

test('concat write stream', function (assert) {
  assert.plan(3);

  var dest = './test/allStream.txt';
  var wstream = fs.createWriteStream(dest);

  concat(['./test/a', './test/b', './test/c'], wstream, function (error) {
    assert.error(error);
    wstream.end();
    fs.readFile(dest, function (error, all) {
      assert.error(error);
      assert.equal(all.toString(), 'this is a' + nlChar + 'this is b' + nlChar +
      	'and this is c' + nlChar);
    });
  });
});
