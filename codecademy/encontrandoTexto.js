//Exercício proposto no Codecademy para utilização do loop FOR.


//02-03/2017
//V0.1 - localizar uma palavra dentro de um texto
// problema: Localiza a primeira letra indicada mas não diferencia duas palavras diferentes com a mesma letra inicial


var text = "Nankdf sdkjf hdsfjkh asdlfh hf ui hfad fhauihf \
sdklfj sdlfkj Julio oij odsi Julio dsfj dlskfj dslfjk dslfkjsd Jdf";
var myName = "Julio";
var hits = [];

for(var i = 0; i < text.length; i++) {
    if(text[i] == 'J'){
        for(var j = i; j < (i + myName.length); j++){
        hits.push(text[j]);
        }
    }
}

if(hits == 0){
    console.log("Seu nome não foi encontrado!");
} else {
    console.log(hits);
}

// =====================================================================

//V0.2 - localizar uma palavra dentro de um texto e diferenciar palavras
// em desenvolvimento.
