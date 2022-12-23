import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import users_routes from "./C_handlers/user";

const app: express.Application = express();
const address: string = '0.0.0.0:3001';

app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});

users_routes(app);

app.listen(3001, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
