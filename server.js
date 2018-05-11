const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
var proxy = require('http-proxy-middleware');
/*app.use(express.static('public'));
app.use(express.static('build'));*/
app.use(express.static('./dist'));

/*app.use('/api', proxy({target: 'http://website.huaxing.com', changeOrigin: true}));*/
/*app.use('/ue', proxy({target: 'http://crmtest.huaxing.com', changeOrigin: true}));*/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})


app.listen(50002, (err) => {
  if (err) {
    console.log(err);
    return null;
  }

  return console.log('50002 port starting');
});