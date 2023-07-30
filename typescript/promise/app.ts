let promesa = new Promise(function(resolve, reject){
    console.log("Etapa 1.");
    setTimeout(() => {
        console.log("Peticion finalizada");
        //Termina bien
        //resolve();
        //Termina mal
        reject();    
    }, 1500);
});

promesa.then(
    function(){
        console.log("Todo fue bien.");
     } // resolve;
    function(){
        console.log("Todo fue mal.");
 }
);
console.log("Etapa 2.");