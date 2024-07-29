const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const transactionRoutes = require('./routes/transactionRoutes');

app.use(bodyParser.json());
app.use(cors());
app.use('/', transactionRoutes);

app.use(express.static('build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
