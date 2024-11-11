import deotenv from "dotenv";

import express from "express";
import connectDB from "./db/index.js";

deotenv.config({
    path:"./env"
});


connectDB();
