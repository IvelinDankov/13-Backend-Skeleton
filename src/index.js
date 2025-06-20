import express from "express";
import routes from "./routes.js";
import handlebars from "express-handlebars";

const port = 3001;

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.urlencoded());
app.use(express.static("src/public"));

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
