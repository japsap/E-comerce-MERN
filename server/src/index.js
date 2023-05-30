const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const routes = require('./routes');

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }))

app.use(routes);


db() 
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is successfully started`)
        })
    })
    .catch(err => console.error(err))
