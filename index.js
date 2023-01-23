const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3000;
const atc = require('./Routes/atc');
const cors = require("cors");

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));
app.engine('ejs', ejs.__express);

app.use('/', atc);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listining on http://localhost:${port}`);
})