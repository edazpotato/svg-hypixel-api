const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.use(function (req, res, next) {
    res.status(404).send("Error 404! I can't find that sorry :(")
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));