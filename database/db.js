const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://duviertavera01:M0rLmjA7pltYCDSC@cluster0.oqb1ptd.mongodb.net/library_db?retryWrites=true&w=majority&tls=true&appName=Cluster0";
const client = new MongoClient(uri);

let db;
async function connectDB() {
    await client.connect();
    db = client.db('user-role-management');
    console.log("Conectado a MongoDB");
}
function getDB() {
    return db;
}
module.exports = { connectDB, getDB };