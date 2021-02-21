import { MongoClient } from 'mongodb';
const url = `mongodb://0.0.0.0:27017/wkstippmeister`;

let db = null;

export async function connectDB(){
    let client = await MongoClient.connect(url, { useNewUrlParser: true});
    db = client.db();
    console.log("Connected to db: ", db);
    return db;
}