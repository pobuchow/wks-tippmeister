import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { authenticationRoute } from "./routes/authenticate";
import { betsRoute } from "./routes/bets";
import { gamesRoute } from "./routes/games";
import { matchesRoute } from "./routes/matches";
import { usersRoute } from "./routes/users";

let port = 8080;
let app = express();

app.listen(port, console.log("Server is running on port", port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);

betsRoute(app);

gamesRoute(app);

matchesRoute(app);

usersRoute(app);
