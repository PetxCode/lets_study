import express, { Application, Request, Response } from "express";
import cors from "cors";
import { connect } from "mongoose";
import user from "./router/userRouter";
import study from "./router/studyRouter";

const URL = "mongodb://localhost:27017/studyDB";
const app: Application = express();

const port: number = 4455;

app.use(cors());
app.use(express.json());

app.use("/", user);
app.use("/", study);

app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Welcome to our study API",
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
});

app.listen(port, async () => {
  console.clear();
  console.log();
  console.log("server connected");
  await connect(URL)
    .then(() => {
      console.log("DB Connection established");
    })
    .catch((err) => console.error());
});
