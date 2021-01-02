const uuid = require('uuid').v4;
import md5 from 'md5';
import { connectDB } from './connectDB';

const authenticationTokens = [];

async function assembleUserState(user){
    let db = await connectDB();
    let games = await db.collection(`games`).find({"users" : {"$in" : [user.id]}}).toArray();
    return {
        games,
        session: {
            authenticated: `AUTHENTICATED`, id: user.id
        }
    }
}

export const authenticationRoute = app => {
    app.post('/authenticate', async (request, response)=>{
        let {username, password} = request.body;
        let db = await connectDB();
        let collection = db.collection(`users`);
        let user = await collection.findOne({name: username});

        if(!user){
            return response.status(401).send("User not found");
        }

        let hash = md5(password);
        if(hash !== user.password){
            return response.status(401).send("Password not correct"); 
        }

        let token = uuid();
        authenticationTokens.push({
            token,
            userId: user.id
        });

        let state = await assembleUserState(user);

        response.send({token, state});
    });
};