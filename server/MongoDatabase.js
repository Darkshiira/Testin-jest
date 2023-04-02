const { MongoClient } = require("mongodb");
require('dotenv').config();
class MongoDatabase {
  url = process.env.DATABASE_URL;
  names;
  client;

  async connect() {
    console.log("Attempting to connect to database.");
    await MongoClient.connect(this.url)
      .then((client) => {
        this.client = client;
        this.names = client.db("Test").collection("Names");
        console.log("connected to database");
      })
      .catch((error) => console.log(error));
  }

  async disconnect() {
    console.log("closing DB connection");
    await this.client.close();
  }
}

exports.db = new MongoDatabase();
