import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const server = express();
const port = process.env.PORT;

mongoose.connect();
