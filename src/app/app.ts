import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "../modules/Users/Users.route";
// import { OrderRoute } from "../modules/Orders/Order.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", getAController);

export default app;
