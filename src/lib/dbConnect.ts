import mongoose from "mongoose";

type connectionType = {
	isConnected?: number;
};

const connection: connectionType = {};

async function dbConnect(): Promise<void> {
	if (connection.isConnected) {
		console.log("Already Connected to the database");
		return;
	}
	try {
		const db = await mongoose.connect(process.env.MONGODB_URL || "");

		connection.isConnected = db.connections[0].readyState;

		console.log("DB Connected Successfully");
	} catch (error) {
		console.log("Database connection failed", error);
		process.exit();
	}
}

export default dbConnect;
