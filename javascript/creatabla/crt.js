// Agregamos fila a la tabla
function agregarFila(){
    document.getElementById("tablademo").insertRow(-1).innerHTML = '<td></td><td></td><td></td>';
}

//Eliminamos filas de la tabla, pero no el encabezado
function eliminarFila(){
  var table = document.getElementById("tablademo");
  var rowCount = table.rows.length;
  //console.log(rowCount);
    
  if(rowCount <= 1)
    alert('No se puede eliminar el encabezado');
  else
    table.deleteRow(rowCount -1);
}