const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/user/:id', (req, res) => {
  res.send(req.params.id);
})

app.get('/:id', (req, res) => {
  res.send(req.params.id);
})

module.exports = app;