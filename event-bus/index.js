const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const event = req.body;

    await axios.post('http://localhost:4000/events', event).catch(e => console.log(e.message));
    await axios.post('http://localhost:4001/events', event).catch(e => console.log(e.message));
    await axios.post('http://localhost:4002/events', event).catch(e => console.log(e.message));

    res.send({ status: 'OK' });
});


app.listen(4005, () => {
    console.log('event bus working on 4005')
})