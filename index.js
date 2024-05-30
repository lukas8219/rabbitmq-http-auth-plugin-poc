const express = require('express');
const app = express();
const logger = require('./logger');

app.use(express.json());
app.use(express.urlencoded())

//IMPLEMENT API AUTH!
app.use('*', (req, res, next) => {
    logger.info(`${req.method}: ${req.originalUrl} ${JSON.stringify(req.body)}`)
    return next();
})

app.post('/api/user', (req, res) => {
    const { username, password } = req.body;
    if(username !== 'lucas' || password !== '123'){
        return res.status(403).end();
    }
    return res.status(200).send("allow management vhost")
});

app.post('/api/vhost', (req, res) => {
    const { vhost } = req.body;
    if(vhost === '/'){
        return res.send('allow');
    }

    return res.send('deny');
})

app.post('/api/queue', (req, res) => {
    return res.status(200).send('allow');
})

app.post('/api/resource', (req, res) => {
    return res.status(200).send('allow');
});

app.listen(8080, () => logger.info(`App is listening`));