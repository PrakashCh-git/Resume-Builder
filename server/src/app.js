import express from "express";
import cors from "cors"
import cookieParser from  'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";


const app = express()


app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Must be your exact frontend URL. Do NOT put a trailing slash.
    credentials: true // This allows the cookie to be sent and received
}))
app.use(cookieParser())


//Routes
app.use('/api/users',userRoutes);
app.use('/api/resumes',resumeRouter);
app.use('/api/ai',aiRouter)







export default app;



