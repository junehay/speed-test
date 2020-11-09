import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';

const app: Application = express();

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
} else {
  app.use(morgan('dev'));
}

const options = {
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.NODE_PORT || 3001
};

app.listen(options, () => console.log(`server on!!! ${options.host}:${options.port}`));
