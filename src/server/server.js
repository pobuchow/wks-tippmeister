import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connectDB";
import { authenticationRoute } from "./authenticate";
import { ObjectId } from 'mongodb';

let port = 8080;
let app = express();

app.listen(port, console.log("Server is running on port", port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);

export const addNewBet = async (bet) => {
  let db = await connectDB();
  let collection = db.collection(`bets`);
  await collection.insertOne(bet);
};

app.post("/bets", async (request, response) => {
  let bet = request.body.bet;
  await addNewBet(bet);
  response.status(200).send();
});

export const upsertGame = async (game) => {
  let db = await connectDB();
  let collection = db.collection(`games`);
  let gameToUpdate = await collection.findOne({ id: game.id });
  if(gameToUpdate){
    await collection.updateOne(
      { id: game.id },
      { $set: {
        name: game.name,
        users: game.users,
        matches: game.matches,
        scores: game.scores,
        hosts: game.hosts,
        isFinished: game.isFinished
      }}
    );
  } else {
    await collection.insertOne(game);
  }
  
};

app.post("/games", async (request, response) => {
  let game = request.body.game;
  await upsertGame(game);
  response.status(200).send();
});

async function getUsers() {
  let db = await connectDB();
  let collection = db.collection(`users`);
  return await collection.find({}).toArray();
}

app.get("/users", async (request, response) => {
  let users = await getUsers();
  response.status(200).send({
    users: users,
  });
});
