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
const seasonsRouter = require('./routes/seasons');
const gamesRouter = require('./routes/games');
const playersRouter = require('./routes/players');
/*const articlesRouter = require('./routes/accounts');*/

app.use('/api/accounts', accountsRouter);
app.use('/api/seasons', seasonsRouter);
app.use('/api/games', gamesRouter);
app.use('/api/players', playersRouter);
/*app.use('/api/articles, articlesRouter);*/

// Connection to Port

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})


