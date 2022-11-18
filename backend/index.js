const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// const options = {
//   origin: "http://localhost:3000",
//   useSuccessStatus: 200,
// };
app.use(cors());
app.use(express.json())
app.use("/", userRoutes);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error Connecting"));

app.listen(process.env.PORT, () => {
  console.log(`Server is Listenning on ${process.env.PORT}`);
});
