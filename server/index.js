const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path")
const transactionRoutes = require('./routes/transactionRoutes');
const port = 3001;

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(cors({
    origin: 'https://suleman-transactions-app.netlify.app'
  }));
app.use('/', transactionRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
