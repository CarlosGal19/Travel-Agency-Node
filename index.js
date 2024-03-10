const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
    // res.render()
    // res.json
    // res.status()
});

app.get('/us', (req, res) => {
    res.send('Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact');
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
