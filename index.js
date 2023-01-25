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

const userRouter = require("./Routes/user");
const booksRouter = require("./Routes/books");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
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
app.use("/user", booksRouter);

app.listen(PORT, () => {
  console.log(`Listing on ${[PORT]}`);
});

