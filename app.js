const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// TODO: Renderizar las vistas
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Mostrar contenido estatico mediante un middleware
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: " Milfer Muñoz",
    titulo: "NodeJS by",
  });
});
app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: " Milfer Muñoz",
    titulo: "NodeJS by",
  });
});
app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: " Milfer Muñoz",
    titulo: "NodeJS by",
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port} `);
});
