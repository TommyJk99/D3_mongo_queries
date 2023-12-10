import dotenv from "dotenv";
import express from "express";
import list from "express-list-endpoints";
import mongoose from "mongoose";
import { Sub } from "./models/subscribersSchema.js";

dotenv.config();

const server = express();
const port = process.env.PORT;

server.get("/subscribers", async (req, res, next) => {
  try {
    const subscribers = await Sub.find({
      company: "FITCORE",
    }).select("email -_id");
    res.json(subscribers);
  } catch (err) {
    next(err);
  }
});

/*
LISTA DI QUERIES
1) { isActive:true } 51 oggetti
2) { age: {$gt: 26}} 54 oggetti
3) { $and: [{ age: { $gt: 26 }}, {age: { $lte: 30 } }] } 19 oggetti
4) { $or: [{ eyeColor : "green"}, {eyeColor : "blue" }] } 62 oggetti
5) { eyeColor : {$ne : "green"}} 66 oggetti
6) { $and: [{ eyeColor: { $ne: "green" }}, {eyeColor: { $ne: "blue" } }] } 35 oggetti
7) { company : "FITCORE"} 1 oggetto con select per restituire solo email
*/

mongoose.connect(process.env.MONGO_URL).then(() => {
  server.listen(port, () => {
    console.log("😊 Listening at port", port);
    console.log(list(server));
  });
});
