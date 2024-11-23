google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
            ['Partido', 'Porcentaje',{role:'style'}],
            ['PP',  5.85, 'blue'],
            ['PSOE',  1.66,'red'],
            ['VOX', 0.316,'green'],
            ['SUMAR', 0.0791,'pink']
          ]);
  
        // Set chart options
        var options = {'title':'Elecciones Generales',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart.draw(data, options);

        
      }

      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart1);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart1() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
            ['Partido', 'Porcentaje',{role:'style'}],
            ['PP',  5.85, 'blue'],
            ['PSOE',  1.66,'red'],
            ['VOX', 0.316,'green'],
            ['SUMAR', 0.0791,'pink']
          ]);
  
        // Set chart options
        var options = {'title':'Elecciones Generales',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
        chart.draw(data, options);

        
      }

