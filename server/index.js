const express = require('express');
const cors = require('cors');
const db = require('./src/config/db');

require('dotenv').config()

const routes = require('./src/routes');

const PORT = process.env.PORT
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }))

app.use(routes);


db() 
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is successfully started ${PORT}`)
        })
    })
    .catch(err => console.log(err.message))
