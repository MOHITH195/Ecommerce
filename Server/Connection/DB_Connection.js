import mongoose from 'mongoose';
import { DB_URL } from '../Constants/Constants.js';
const db = async () => {
    try {
        const db =await mongoose.connect(DB_URL)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}

export default db;

