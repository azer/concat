## concat

Concatenate files

```js
var concat = require('concat')

concat(['a.css', 'b.css', 'c.css'], 'all.css', function (error) {
  // done
})
```

or, in the shell:

```sh
concat a.css b.css c.css -o all.css
```

## Install

```sh
$ npm install -g concat  	# globally

$ npm install concat  		# for your project
```
