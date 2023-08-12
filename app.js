import express from "express"
import * as dotenv from "dotenv"
import { mainRouter } from "./routers/main.js"
import cors from "cors"
dotenv.config()

const app=express()
app.use(express.json())

app.use(cors())
app.use("/api/auth",mainRouter)


const port=process.env.PORT || 4000
app.listen(port,()=>{
    console.log(` your backen is running on port ${port}`);
})
