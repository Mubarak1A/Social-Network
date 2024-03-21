const mongoose = require('mongoose')

const database = mongoose.connect(process.env.dbURL, {
    useNewUrlParser : true
})
.then(() => {
    console.log('Database connected successfully!');
})
.catch((err) => {
    console.log('Error connecting to db', err)
})

module.exports = database;