const express = require('express');
const app = express();

app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  }
  else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('Express server is up at port ' + PORT);
});
