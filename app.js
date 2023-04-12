<<<<<<< HEAD
require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT;

//? cors will allow us to use DOM in the public folder
const cors = require("cors");

const routesController = require("./controllers/routes.controller");

// ? This is using whatever is in the public folder.
=======
const express = require("express")

const app = express();

const PORT = 4000;

const cors = require("cors")

const routesController = require("./controllers/routes.controller");

>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
app.use(express.static(`${__dirname}/public`));
console.log("pathway: ", __dirname);

app.use(express.json());

<<<<<<< HEAD
app.use(cors());

app.use("/routes", routesController);

=======
app.use(cors())

app.use("/routes", routesController);



>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
app.listen(PORT, () => {
	console.log(`Listening on Port: ${PORT}`);
});
