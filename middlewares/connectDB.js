import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  // Si on est déjà connecté, on garde la connexion actuelle
  console.log("helloe");
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  // Sinon, on se connecte
  await mongoose.connect(process.env.MONGODB_URI);
  mongoose.set("strictQuery", false);

  return handler(req, res);
};

export default connectDB;
