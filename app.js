require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT;

//? cors will allow us to use DOM in the public folder
const cors = require("cors");

const routesController = require("./controllers/routes.controller");

// ? This is using whatever is in the public folder.
app.use(express.static(`${__dirname}/public`));
console.log("pathway: ", __dirname);

app.use(express.json());

app.use(cors());

app.use("/routes", routesController);

app.listen(PORT, () => {
	console.log(`Listening on Port: ${PORT}`);
});
