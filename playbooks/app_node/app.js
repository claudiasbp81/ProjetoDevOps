var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
app.listen(port);

app.get('/api/v1/healthcheck', function(req, res) {
  res.send({
      "status": {
          "app": true
      }
  });
});