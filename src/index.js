import deotenv from "dotenv";
import {app} from "./app.js";

import connectDB from "./db/index.js";

deotenv.config({
    path:"./env"
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`));
}
)
.catch((error)=>{
    console.log("MONGODB CONNECTION failed !!!",error);
})
