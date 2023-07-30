function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Lunes', 20, 28, 38, 45],
    ['Martes', 31, 38, 55, 66],
    ['Miercoles', 50, 55, 77, 80],
    ['Jueves', 77, 77, 66, 50],
    ['Viernes', 68, 66, 22, 15]
    // Treat first row as data as well.
  ], true);

  var options = {
    legend:'none'
  };

  var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}