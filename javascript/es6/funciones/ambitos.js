var valor = "global";

function funcionlocal () {
  let valor = "local";
  return valor;
}

console.log(valor); // "global"
console.log(funcionLocal()); // "local"
console.log(valor); // "global"
