import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rodrigoexer1:hYwshdKRYOtJM0qg@cluster0.sb1h7kf.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;