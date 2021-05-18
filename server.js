const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const FinanceRouter = require('./routes/finance');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongodb connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection is established.");
});

app.use('/finance', FinanceRouter);

app.listen(port, () => {
    console.log('Node.js server is running.');
});
