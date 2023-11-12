import mongoose from "mongoose";

interface ConnectionObject {
  isConnected?: number;
}

export const connectToDB = async (): Promise<void> => {
  const connection: ConnectionObject = {};
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO as string);
    connection.isConnected = db.connections[0].readyState as number;
  } catch (error) {
    const errorMessage = typeof error === "string" ? error : "An error occurred";
    throw new Error(errorMessage);
  }
};

