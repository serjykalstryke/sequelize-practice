const express = require("express");
_handlebars = require("handlebars")
const exphbs = require("express-handlebars"),
{allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./config/database")

db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log("Error: " + err));

const app = express();

//Handlebars
app.engine("handlebars", exphbs({ 
    handlebars: allowInsecurePrototypeAccess(_handlebars) 
}));
app.set("view engine", "handlebars");

//Set static folder
app.use(express.static(path.join(__dirname, "public")))


//Index route
app.get("/", (req, res) => res.render("index", { layout: "landing" }));

//Gig routes
app.use("/gigs", require("./routes/gigs.js"));

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server started on port ${PORT}`));

