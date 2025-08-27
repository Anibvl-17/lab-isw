import express from "express";

const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hola mundo!" });
});

app.post("/nombre", (req, res) => {
  const { nombre } = req.body;

  if (nombre) {
    res.status(200).json({ message: `Hola ${nombre}`});
  } else {
    res.status(400).json({ message: `No enviaste nombre!`});
  }

});

app.listen(port, () => {
  console.log(`=> Servidor corriendo en el http://localhost:${port}`);
});