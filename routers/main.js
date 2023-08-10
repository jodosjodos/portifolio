import express from "express"
import { sendEmail } from "../controllers/main.js"
export const mainRouter=express.Router()

mainRouter.post("/sendEmail",sendEmail)