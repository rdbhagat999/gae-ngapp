const express = require('express')

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  console.log(req.method);
  res.send('hello world').end();
});

app.all('*', (req, res) => {
  console.log(req.method);
  res.send('not implemented').end();
});

app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
