const {sum} = require("./app.js")

if(sum(5,7)!=12){
throw console.error("ERRO NA SOMA, RESULTADO ESPERADO: 12, OBTIDO: "+ soma(5,7));
}