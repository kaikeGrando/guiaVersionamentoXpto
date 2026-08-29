
const appFunctions = require("./app.js")
console.log(appFunctions)
if(appFunctions.soma(5,7)!=12){
throw console.error("ERRO NA SOMA, RESULTADO ESPERADO: 12, OBTIDO: "+ soma(5,7));
}