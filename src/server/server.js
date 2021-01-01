import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connectDB';

let port = 8080;
let app = express();

app.listen(port, console.log('Server is running on port', port));

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
);

export const addNewBet = async bet => {
    let db = await connectDB();
    let collection = db.collection(`bets`);
    await collection.insertOne(bet);
};

app.post('/bets', async (request, response) => {
    let bet = request.body.bet;
    await addNewBet(bet);
    response.status(200).send();
});