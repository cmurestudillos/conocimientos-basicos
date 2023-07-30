function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Edad', 'Peso'],
    [ 8,      12],
    [ 4,      5.5],
    [ 11,     14],
    [ 4,      5],
    [ 3,      3.5],
    [ 6.5,    7]
  ]);

  var options = {
    title: 'Edad vs. Peso',
    legend: 'none',
    crosshair: { trigger: 'both', orientation: 'both' },
    trendlines: {
      0: {
        type: 'polynomial',
        degree: 3,
        visibleInLegend: true,
      }
    }
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('polynomial2_div'));
  chart.draw(data, options);
}