import { connect } from 'mongoose';
import {MONGO_URI} from './config';

export const connectDB = async () => {
    try {
        await connect(MONGO_URI);
        console.log("connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}