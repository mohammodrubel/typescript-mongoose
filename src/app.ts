import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { studentsRoute } from './app/module/student/student.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  console.log(req);
  res.send('hello world');
});

app.use('/students', studentsRoute);

export default app;
