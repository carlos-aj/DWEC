google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['France', 700],
      ['Spain', 650],
      ['United States', 600],
      ['Italy', 550],
      ['France', 500],
      ['Mexico', 450],
      ['United Kingdom', 400]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }