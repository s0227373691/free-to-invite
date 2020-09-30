const express = require('express');

const app = express();
const connectDB = require('./config/db');

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    // app.use('/', express.static('./dist'));
    // app.use('/node_modules', express.static('./node_modules'));
    // res.sendFile(`${__dirname}/dist/index.html`, (err) => {
    //     if (err) res.sendStatus(404);
    // });
    res.send('hellow world');
});
app.get('/api/user', (req, res) => {
    res.send({ id: 0, name: 'Jhon' });
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
