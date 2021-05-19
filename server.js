const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const CashinRouter = require('./routes/cashin');
const CashoutRouter = require('./routes/cashout');
const CategoryRouter = require('./routes/category');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongodb connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection is established.");
});

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(port, () => {
    console.log('Node.js server is running.');
});

app.use('/cashin', CashinRouter);
app.use('/cashout', CashoutRouter);
app.use('/category', CategoryRouter);
