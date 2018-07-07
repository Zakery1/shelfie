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

app.get('/api/inventory', (req, res ) => {
    req.app.get('db').get_inventory().then(products => {
        res.json(products)
    }).catch(status(500).send('this endpoint is working'))
    // let db = req.app.get('db')
    // catch(error => {
    //     console.log('-------------- error', error);
    //   });
})

app.post('/api/inventory', ( req, res ) => {
    const { product } = req.body;
    req.app.get('db').insert_inventory
})

// app.post('/api/heroes', (req, res) => {
//     const hero = req.body;
//     req.app.get('db').create_hero({
//         name: hero.name,
//         streetName: hero.streetName,
//         age: hero.age,
//         powers: hero.powers,
//         pictureUrl: hero.pictureUrl
//     }).then((newHeroes) => {
//         res.json(newHeroes[0]);
//     }).catch( error => {
//         console.log('error', error);
//         res.status(500).send('There was an error on the server');
//     })
// })


const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

