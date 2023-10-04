const express = require('express');
const path = require('path');
const cors = require("cors");
const morgan = require('morgan');
const atc = require('./Routes/atc');
const errorHander = require('./Utils/errorMiddlewar');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));

app.use('/', atc);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(errorHander);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
