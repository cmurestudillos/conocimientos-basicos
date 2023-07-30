function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Elemento", "Densidad", { role: "style" } ],
    ["Bronce", 8.94, "#b87333"],
    ["Plata", 10.49, "silver"],
    ["Oro", 19.30, "gold"],
    ["Platinium", 21.45, "color: #e5e4e2"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Densidad de metales precioso en g/cm^3",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}