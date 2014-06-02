var concat = require("../");
var test = require("prova");
var fs = require("fs");

test('concat', function (assert) {
  assert.plan(3);
  concat(['./test/a', './test/b', './test/c'], './test/all', function (error) {
    assert.error(error);

    fs.readFile('./test/all', function (error, all) {
      assert.error(error);
      assert.equal(all.toString(), 'this is a\nthis is b\nand this is c\n');
    });
  });
});
