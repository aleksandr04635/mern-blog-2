import mongoose from "mongoose";
//import dotenv from "dotenv";
//dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      "database is connected successfully to " + process.env.MONGO_URL
    );
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
