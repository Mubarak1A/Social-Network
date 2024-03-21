const express = require('express')
const dotenv = require('dotenv');

dotenv.config();

const app = express()

app.listen(8000, () => {
    console.log('server listening at port 8000...')
})
