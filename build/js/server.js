import express from"express";const{static:serveStatic}=express,app=express(),port=process.env.PORT||8080;app.use(serveStatic("public")),app.get("/",((e,p)=>{p.send("index.html")})),app.listen(port,(()=>{console.log(`Servidor escuchando en el puerto ${port}`)}));