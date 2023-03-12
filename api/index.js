const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const app = express();
app.use(cors());

const ROOT = 5055;

app.get('/', (req, res, next) => {
  res.status(200).json({ success: true });
});

app.listen(ROOT, () => {
  console.log(`Server is running on ${ROOT} on experimental branch`);
});
