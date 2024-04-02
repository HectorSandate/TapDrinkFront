import express from "express";
import morgan from "morgan";
import authRoute from "./routes/auth.router.js";
import cors from "cors"

const app = express();

app.use(cors({
    origin:"http://localhost:3000"
}))

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRoute);

export default app;
