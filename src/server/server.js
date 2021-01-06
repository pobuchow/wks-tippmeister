import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connectDB';
import { authenticationRoute } from './authenticate';

let port = 8080;
let app = express();

app.listen(port, console.log('Server is running on port', port));

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
);

authenticationRoute(app);

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

export const createGame = async game => {
    let db = await connectDB();
    let collection = db.collection(`games`);
    await collection.insertOne(game);
};

app.post('/games', async (request, response) => {
    let game = request.body.game;
    await createGame(game);
    response.status(200).send();
});