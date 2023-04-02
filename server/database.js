const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://Darkshiira:Boodise87@cluster0.wcjvn29.mongodb.net/?retryWrites=true&w=majority';

const db = {'Names': undefined}

MongoClient.connect(url).then((client) => {db.Names = client.db('Test').collection('Names')});

exports.db = db;