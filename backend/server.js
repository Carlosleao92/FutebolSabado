const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});


// API ROUTES
const accountsRouter = require('./routes/accounts');
/*const playersRouter = require('./routes/accounts');
const seasonsRouter = require('./routes/accounts');
const gamesRouter = require('./routes/accounts');
const articlesRouter = require('./routes/accounts');*/

app.use('/api/accounts', accountsRouter);
/*app.use('/api/players') = require(playersRouter);
app.use('/api/seasons') = require(seasonsRouter);
app.use('/api/games') = require(gamesRouter);
app.use('/api/articles') = require(articlesRouter);*/

// Connection to Port

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})


