import { MongoClient } from "mongodb";

console.log(process.env.ATLAS_URI);

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
  console.log("Connected to MongoDB");
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_mflix");

export default db;
