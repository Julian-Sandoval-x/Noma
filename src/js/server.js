import express from "express";
const { static: serveStatic } = express;
const app = express();
const port = process.env.PORT || 8080; // Utiliza el puerto de Railway o el puerto 8080 por defecto

app.use(serveStatic("public"));

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("index.html");
});

// Escucha en el puerto definido por Railway o en el 8080 por defecto
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
