import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connectDB";
import { authenticationRoute } from "./authenticate";
import { betsRoute } from "./bets";

let port = 8080;
let app = express();

app.listen(port, console.log("Server is running on port", port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);

betsRoute(app);

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

export const upsertMatch = async (match) => {
  let db = await connectDB();
  let collection = db.collection(`matches`);
  let matchToUpdate = await collection.findOne({ id: match.id });
  if(matchToUpdate){
    await collection.updateOne(
      { id: match.id },
      { $set: {
        event_datetime: match.event_datetime,
        homeTeam: match.homeTeam,
        awayTeam: match.awayTeam,
        goalsHomeTeam: match.goalsHomeTeam,
        goalsAwayTeam: match.goalsAwayTeam
      }}
    );
  } else {
    await collection.insertOne(match);
  }
};

app.post("/games", async (request, response) => {
  let game = request.body.game;
  await upsertGame(game);
  response.status(200).send();
});

app.post("/matches", async (request, response) => {
  let match = request.body.match;
  await upsertMatch(match);
  response.status(200).send();
});

export const createMatch = async (match) => {
  let db = await connectDB();
  let collection = db.collection(`matches`);
  await collection.insertOne(match);
};

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
