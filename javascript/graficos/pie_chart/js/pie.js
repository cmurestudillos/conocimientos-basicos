function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Horas por dia'],
    ['Trabajar',     11],
    ['Comer',      2],
    ['Jugar PC',  2],
    ['Ver TV', 2],
    ['Dormir',    7]
  ]);

  var options = {
    title: 'Mis activiades diarias'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}