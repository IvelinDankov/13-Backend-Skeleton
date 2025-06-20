import express from "express";
import routes from "./routes.js";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { auth } from "./middlewares/authMiddleware.js";

const port = 3001;

const app = express();

mongoose
  .connect("mongodb://localhost:27017", { dbName: "simple-app" })
  .then(() => console.log("DB is successfully connected...."))
  .catch((err) => console.log("DB is not connected" + err.message));

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.urlencoded());
app.use(express.static("src/public"));
app.use(cookieParser());
app.use(auth);

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
