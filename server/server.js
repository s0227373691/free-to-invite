const users = require('./routes/users');
const auth = require('./routes/auth');

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

app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
