const path = require('path')
var express = require('express');
var app = express();

// if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })
// }

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});