const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const dataController = require('./dataController.js');
const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/person', dataController.getPerson, (req, res) => {
  const { name } = res.locals;
  res.status(200).json(name);
});

app.get('/animals', dataController.getAnimals, (req, res) => {
  const { animals } = res.locals;
  res.status(200).json(animals);
});

app.get('/company', dataController.getCompanies, (req, res) => {
  const { companies } = res.locals;
  res.status(200).json(companies);
});

app.listen(port, () => {
  console.log(`welcome to the test server on port ${port}`);
});
