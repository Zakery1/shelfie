const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database connected')
})

app.get('/api/test', (req, res ) => {
    // let db = req.app.get('db')
    res.status(200).send('this endpoint is working')
})

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

