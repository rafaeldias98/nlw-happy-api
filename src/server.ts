import express from 'express';
import cors from 'cors';
import { join } from 'path';

import errorHandler from './errors/handler';
import routes from './routes';

import 'express-async-errors';
import './database/connection';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

app.use(errorHandler);

app.listen(3333, () => console.log('Server started at port 3333'));
