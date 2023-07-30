function drawSeriesChart() {

  var data = google.visualization.arrayToDataTable([
    ['ID', 'Esperanza de Vida', 'Ratio de Fertilidad', 'Region',     'Poblacion'],
    ['CAN',    80.66,              1.67,      'America del Norte',  33739900],
    ['DEU',    79.84,              1.36,      'Europa',         81902307],
    ['DNK',    78.6,               1.84,      'Europa',         5523095],
    ['EGY',    72.73,              2.78,      'Oriente Medio',    79716203],
    ['GBR',    80.05,              2,         'Europa',         61801570],
    ['IRN',    72.49,              1.7,       'Oriente Medio',    73137148],
    ['IRQ',    68.09,              4.77,      'Oriente Medio',    31090763],
    ['ISR',    81.55,              2.96,      'Oriente Medio',    7485600],
    ['RUS',    68.6,               1.54,      'Europa',         141850000],
    ['USA',    78.09,              2.05,      'America del Norte',  307007000]
  ]);

  var options = {
    title: 'Correlacion entre la esperanza de vida, fertilidad ' +
           'y poblacion del mundo en algunos paises.',
    hAxis: {title: 'Esperanza de Vida'},
    vAxis: {title: 'Ratio de Dertilidad'},
    bubble: {textStyle: {fontSize: 11}}
  };

  var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
  chart.draw(data, options);
}