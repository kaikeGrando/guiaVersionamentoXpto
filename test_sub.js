const {sub} = require("./app.js")

if(sub(5,7)!=-2){
throw console.error("ERRO NA SOMA, RESULTADO ESPERADO: -2, OBTIDO: "+ sub(5,7));
}