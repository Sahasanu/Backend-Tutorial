import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/backend_tut");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default ConnectDB;