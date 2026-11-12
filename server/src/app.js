import express from "express";
import cors from "cors"
import cookieParser from  'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";


const app = express()


app.use(express.json());
app.use(cors({
    origin: 'https://resume-builder-co46.vercel.app', // No trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}))
app.use(cookieParser())


//Routes
app.use('/api/users',userRoutes);
app.use('/api/resumes',resumeRouter);
app.use('/api/ai',aiRouter)







export default app;



