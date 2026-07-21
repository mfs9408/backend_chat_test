import "./config/env";
import cors from "cors";
import express from "express";
import chatRoutes from "./routes/chat.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

export default app;
