import  { initialState } from './initialState';
import { connectDB } from './connectDB';

async function initDB(){
    let db = await connectDB();
    for(let collectionName in initialState){
        let collection = db.collection(collectionName);
        await collection.insertMany(initialState[collectionName]);
    }
}

initDB();