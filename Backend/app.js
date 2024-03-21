const express = require('express')
const dotenv = require('dotenv');
const database = require('./database');

dotenv.config();

const app = express()

const PORT = process.env.PORT || 8000

database

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}...`)
})
