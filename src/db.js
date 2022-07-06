import { connect } from 'mongoose';

export const connectDB = async () => {
    try {
        await connect("mongodb+srv://jaime:Knbcl5PucKSx8nDc@clipnoteapp.7to5j.mongodb.net/?retryWrites=true");
        console.log("connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}