let miContador = (function () {
  let _contador = 0; // Por convención, a las variables "privadas" se las llama con un `_` delante
  function incrementar () {
    return _contador++;
  }
  function decrementar () {
    return _contador--;
  }
  function valor () {
    return _contador;
  }
  return {
    incrementar: incrementar,
    decrementar: decrementar,
    valor: valor
  }
})();

miContador.valor(); // 0
miContador.incrementar();
miContador.incrementar();
miContador.valor(); // 2
miContador.decrementar();
miContador.valor(); // 1
