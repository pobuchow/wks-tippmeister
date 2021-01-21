import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connectDB";
import { authenticationRoute } from "./authenticate";
import { betsRoute } from "./bets";
import { gamesRoute } from "./games";
import { matchesRoute } from "./matches";

let port = 8080;
let app = express();

app.listen(port, console.log("Server is running on port", port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);

betsRoute(app);

gamesRoute(app);

matchesRoute(app);

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
