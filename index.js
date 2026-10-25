
import server from "./app/server.js";



server.listen(server.get("port"), () =>{

  console.log(`el servidor esta corriendo en el puerto`, server.get("port"));

} );