// Para la función loadCSS
function loadCSS (url) {
  var promise = new Promise(
    function resolve(resolve, reject) {
      var elem = window.document.createElement('link');
      elem.rel = "stylesheet";
      elem.href = url;
      window.document.head.appendChild(elem);
      
      resolve();
    }
  );
  return promise;
}

// Para la función division
function division (num1, num2) {
  var promise = new Promise(
    function resolver(resolve, reject) {    
      if (num2 == 0) {
        reject(new Error("Dividir entre cero es Infinito"));
      } else {
        resolve(num1 / num2);
      }
    }
  );
  return promise;
  }
