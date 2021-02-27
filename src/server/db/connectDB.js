import { MongoClient } from 'mongodb';
const MONGO_ADDRESS = process.env.MONGO_ADDRESS || `0.0.0.0`;
const url = `mongodb://` + MONGO_ADDRESS + `:27017/wkstippmeister`;

let db = null;

export async function connectDB(){
    let client = await MongoClient.connect(url, { useNewUrlParser: true});
    db = client.db();
    console.log("Connected to db: ", db);
    return db;
}