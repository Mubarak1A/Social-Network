const express = require('express')
const dotenv = require('dotenv');
const database = require('./database');
const cors = require('cors')

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8080

async function startServer() {
    try {
        await database;
        app.listen(PORT, () => {
            console.log(`Server running at port ${PORT}!`);
        });
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

startServer()
