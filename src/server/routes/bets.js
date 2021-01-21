import { connectDB } from "../db/connectDB";

const addNewBet = async (bet) => {
  let db = await connectDB();
  let collection = db.collection(`bets`);
  await collection.insertOne(bet);
};

export const betsRoute = (app) => {
  app.post("/bets", async (request, response) => {
    let bet = request.body.bet;
    await addNewBet(bet);
    response.status(200).send();
  });
};
