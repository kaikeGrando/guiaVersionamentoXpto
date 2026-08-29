const {mul} = require("./app.js")

if(mul(5,7)!=35){
throw console.error("ERRO NA SOMA, RESULTADO ESPERADO: 35, OBTIDO: "+ mul(5,7));
}