const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://root:root@cluster0.h0glyhz.mongodb.net/');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;