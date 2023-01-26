const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 8080;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASS
);

const questions = require("./Routes/questions");
const userRouter = require("./Routes/user");
const booksRouter = require("./Routes/books");
const { default: axios } = require("axios");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:8080",
      "https://booktivity-r59ue7lvr-finalcreature.vercel.app",
    ],
    credentials: true,
  })
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB connection successful!");
  });

app.use("/user", userRouter);
app.use("/books", booksRouter);
app.use("/questions", questions);
app.get("/ds", (req, res) => {
  console.log("Trying to reach model");
  axios
    .get(" http://35.158.92.150:8080/my_user?user_id=11400")
    .then((res) => console.log(res.data));
});

app.listen(PORT, () => {
  console.log(`Listing on ${[PORT]}`);
});
