const express = require('express');
const app = express();

const moviesRouter = require('./routes/moviesRouter');
const seriesRouter = require('./routes/seriesRouter');

const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/movies', moviesRouter);
app.use('/series', seriesRouter);

app.listen(3000, () => console.log("server running on port 3000") );