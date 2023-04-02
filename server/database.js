const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://Darkshiira:Boodise87@cluster0.wcjvn29.mongodb.net/?retryWrites=true&w=majority";

const db = {
  Names: undefined,
  connect: async () =>
    MongoClient.connect(url)
      .then((client) => {
        db.Names = client.db("Test").collection("Names");
        console.log("connected to database");
      })
      .catch((error) => console.log(error)),
};

// MongoClient.connect(url)
//   .then((client) => {
//     db.Names = client.db("Test").collection("Names");
//     console.log("connected to database");
//   })
//   .catch((error) => console.log(error));

exports.db = db;
