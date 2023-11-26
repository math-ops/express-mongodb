import mongoose from "mongoose";

async function databaseConect() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@aluralivraria.e0atga0.mongodb.net/livraria?retryWrites=true&w=majority"
  );

  return mongoose.connection;
}

export default databaseConect;
