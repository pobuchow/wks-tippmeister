import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { authenticationRoute } from "./routes/authenticate";
import { betsRoute } from "./routes/bets";
import { gamesRoute } from "./routes/games";
import { matchesRoute } from "./routes/matches";
import { usersRoute } from "./routes/users";
import { initDB } from "./db/initDB";

let port = 8080;
let app = express();

app.listen(port, console.log("Server is running on port", port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.get("/init", async (request, response) => {
    initDB();
    response.status(200).send('db initialized');
});

app.get("/hello", async (request, response) => {
    response.status(200).send('hello from wks-tippmeister');
});

authenticationRoute(app);

betsRoute(app);

gamesRoute(app);

matchesRoute(app);

usersRoute(app);
