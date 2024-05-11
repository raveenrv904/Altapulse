require("dotenv").config();

const express = require("express");

const app = express();

const userRouter = require("./routes/userRoute");

const connectDB = require("./db/connectDB");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api/v1", userRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(8000, () => {
      console.log(`Server is Listening to post 8000`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
