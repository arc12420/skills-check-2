require('dotenv').config();
const express = require('express');
const massive = require('massive');
const productsCtrl = require("./productsCtrl");

const {CONNECTION_STRING, SERVER_PORT} = process.env;
const app = express();

app.use(express.json());


massive({
    connectionString:CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log(`Database is connected`)
})

app.get('/api/products', productsCtrl.getProducts)
app.post('/api/products', productsCtrl.addProduct)
app.get('/api/single/product/:id', productsCtrl.getOneProduct)
app.put('/api/products/:id', productsCtrl.updateProduct)
app.delete('/api/products/:id', productsCtrl.deleteProduct)


app.listen(SERVER_PORT, () => console.log (`You have found the six fingered port on server ${SERVER_PORT}`))