import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}));    //accept json data of 16kb when form is submitted
app.use(express.urlencoded({extended:true,limit:"16kb"})) //accept data from the url
app.use(express.static("public")) //use to store data in public
app.use(cookieParser())



export {app};