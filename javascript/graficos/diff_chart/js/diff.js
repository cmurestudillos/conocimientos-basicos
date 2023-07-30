function drawChart() {
  var oldData = google.visualization.arrayToDataTable([
    ['Major', 'Degrees'],
    ['Economia', 256070], ['Educacion', 108034],
    ['C. Sociales e Historia', 127101], ['Salud', 81863],
    ['Psicologia', 74194]]);

  var newData = google.visualization.arrayToDataTable([
    ['Major', 'Degrees'],
    ['Economia', 358293], ['Educacion', 101265],
    ['C. Sociales e Historia', 172780], ['Salud', 129634],
    ['Psicologia', 97216]]);

  var options = { pieSliceText: 'none' };

  var chartBefore = new google.visualization.PieChart(document.getElementById('piechart_before'));
  var chartAfter = new google.visualization.PieChart(document.getElementById('piechart_after'));
  var chartDiff = new google.visualization.PieChart(document.getElementById('piechart_diff'));

  chartBefore.draw(oldData, options);
  chartAfter.draw(newData, options);

  var diffData = chartDiff.computeDiff(oldData, newData);
  chartDiff.draw(diffData, options);
}