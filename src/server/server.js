import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { authenticationRoute } from "./authenticate";
import { betsRoute } from "./bets";
import { gamesRoute } from "./games";
import { matchesRoute } from "./matches";
import { usersRoute } from "./users";

let port = 8080;
let app = express();

app.listen(port, console.log("Server is running on port", port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);

betsRoute(app);

gamesRoute(app);

matchesRoute(app);

usersRoute(app);
