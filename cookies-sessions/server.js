const express= require("express");
const cookieSession = require("cookie-session");
const app= express();

// name=session es el name por defecto que se la de a la cookieSession
// La lista de claves(Keys) que se usarán para firmar y verificar los valores de las cookies o una Keygripinstancia configurada. Las cookies establecidas siempre se firman con keys[0], mientras que las otras claves son válidas para la verificación, lo que permite la rotación de claves. Si Keygripse proporciona una instancia, se puede usar para cambiar los parámetros de la firma, como el algoritmo de la firma.
app.use(cookieSession({
   name:"session",
   keys:["asdfsdfsdfsdf","dfsdfsdfsdfsdf"]
}));

// funcion para contar la cantidad de veces que ingresamos a una pagina
app.get("/",(req,res)=>{
   req.session.visits=req.session.visits || 0;
    req.session.visits= req.session.visits +1 ;
    res.send(`${ req.session.visits} visita(s)`);
})


app.listen(3000);