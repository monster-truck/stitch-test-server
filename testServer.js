const express = require('express');
const app = express();
const port = 9999;

app.listen(port, () => {
  console.log(`welcome to the test server on port ${port}`);
});
