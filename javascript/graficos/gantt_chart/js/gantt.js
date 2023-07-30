function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
      ['2014 Primavera', 'Primavera 2014', 'Primavera',
       new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null],
      ['2014 Verano', 'Verano 2014', 'Verano',
       new Date(2014, 5, 21), new Date(2014, 8, 20), null, 100, null],
      ['2014 Otoño', 'Otoño 2014', 'Otoño',
       new Date(2014, 8, 21), new Date(2014, 11, 20), null, 100, null],
      ['2014 Invierno', 'Invierno 2014', 'Invierno',
       new Date(2014, 11, 21), new Date(2015, 2, 21), null, 100, null],
      ['2015 Primavera', 'Primavera 2015', 'Primavera',
       new Date(2015, 2, 22), new Date(2015, 5, 20), null, 50, null],
      ['2015 Verano', 'Verano 2015', 'Verano',
       new Date(2015, 5, 21), new Date(2015, 8, 20), null, 0, null],
      ['2015 Otoño', 'Otoño 2015', 'Otoño',
       new Date(2015, 8, 21), new Date(2015, 11, 20), null, 0, null],
      ['2015 Invierno', 'Invierno 2015', 'Invierno',
       new Date(2015, 11, 21), new Date(2016, 2, 21), null, 0, null],
      ['Futbol', 'Temporada de Futbol', 'Deportes',
       new Date(2014, 8, 4), new Date(2015, 1, 1), null, 100, null],
      ['Beisbol', 'Temporada de Beisbol', 'Deportes',
       new Date(2015, 2, 31), new Date(2015, 9, 20), null, 14, null],
      ['Baloncesto', 'Temporada de Baloncesto', 'Deportes',
       new Date(2014, 9, 28), new Date(2015, 5, 20), null, 86, null],
      ['Hockey', 'Temporada de Hockey', 'Deportes',
       new Date(2014, 9, 8), new Date(2015, 5, 21), null, 89, null]
    ]);

    var options = {
      height: 400,
      gantt: {
        trackHeight: 30
      }
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
  }