const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');
const PORT = 3333;

mongoose.connect('mongodb+srv://vinilima07:150397@cluster0-wcbrn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(routes);

app.listen(PORT);

