import express from 'express';
import { PORT as port } from './Constants/Constants.js';
import DB_Connection from './Connection/DB_Connection.js';

const app = express();

const PORT = port;
 DB_Connection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})