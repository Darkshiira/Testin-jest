const { db } = require("./MongoDatabase");
const { server } = require("./server");
db.connect();

server.listen(5050);