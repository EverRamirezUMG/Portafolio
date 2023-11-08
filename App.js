const express = require("express");
const hbs = require("hbs");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Ever Ramírez",
  });
});

app.get("/ElRancho", (req, res) => {
  res.render("ElRancho", {
    titulo: "El Rancho",
  });
});

app.get("/SistemaSolar", (req, res) => {
  res.render("SistemaSolar", {
    titulo: "Sistema Solar",
  });
});
app.get("/Sysinfo", (req, res) => {
  res.render("Sysinfo", {
    titulo: "Sysinfo",
  });
});
app.get("/Compilador", (req, res) => {
  res.render("Compilador", {
    titulo: "Compilador",
  });
});
app.get("/Yargs", (req, res) => {
  res.render("Yargs", {
    titulo: "Yargs",
  });
});
app.get("/WEBserver", (req, res) => {
  res.render("WEBserver", {
    titulo: "WEBserver",
  });
});
app.get("/MongoDB", (req, res) => {
  res.render("MongoDB", {
    titulo: "MongoDB",
  });
});
app.get("/PasteleriaIsrael", (req, res) => {
  res.render("PasteleriaIsrael", {
    titulo: "Pasteleria Israel",
  });
});
app.get("/Intereses", (req, res) => {
  res.render("Intereses", {
    titulo: "Intereses",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    titulo: "Not Found",
  });
});

app.get("/ElRancho", (req, res) => {
  res.sendFile(__dirname + "/public/ElRancho");
});
app.get("/SistemaSolar", (req, res) => {
  res.sendFile(__dirname + "/public/SistemaSolar");
});
app.get("/Sysinfo", (req, res) => {
  res.sendFile(__dirname + "/public/Sysinfo");
});
app.get("/Compilador", (req, res) => {
  res.sendFile(__dirname + "/public/Copilador");
});

app.use(cors());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
