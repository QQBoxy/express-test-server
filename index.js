const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('*', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('*', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
