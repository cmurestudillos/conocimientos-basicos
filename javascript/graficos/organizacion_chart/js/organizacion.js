function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Nombre');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">Presidente</div>'},
     '', 'The President'],
    [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">El Vice</div>'},
     'Mike', 'VP'],
    ['Alice', 'Mike', ''],
    ['Bob', 'Jim', 'Bob Sponge'],
    ['Carol', 'Bob', '']
  ]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {allowHtml:true});
}