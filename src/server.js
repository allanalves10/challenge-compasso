import express from 'express';
import cors from 'cors';
import { router } from './api/routes/routes';

const app = express();

const port =  5000;

app.use(cors());
app.use(express.json());

app.use('/github', router);

app.listen(port, () => console.log(`Listening on port ${port}`));