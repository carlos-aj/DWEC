google.charts.load('current', {'packages':['corechart']});
  var cahrt;
  var data;
      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(() => {
        data = google.visualization.arrayToDataTable([
          ['Partido', 'Porcentaje',{role:'style'},],
          ['PP',  0, 'blue'],
          ['PSOE', 0,'red'],
          ['VOX', 0,'green'],
          ['SUMAR', 0,'pink']
        ]);
        
        chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        drawChart(); 
        setInterval(drawChart, 10000); 
    });
      

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.

      function drawChart() {
        var prtPP, prtPSOE, prtVOX, prtSUMAR;

        do{
          prtPP = Math.trunc(Math.random() * 100);
          prtPSOE = Math.trunc(Math.random() * 100);
          prtVOX = Math.trunc(Math.random() * 100);
          prtSUMAR = Math.trunc(Math.random() * 100);
        }while((prtPP+prtPSOE+prtSUMAR+prtVOX) !== 100);
        
        data.setValue(0, 1, prtPP); 
        data.setValue(1, 1, prtPSOE); 
        data.setValue(2, 1, prtVOX); 
        data.setValue(3, 1, prtSUMAR);
  
        // Set chart options
        var options = {'title':'Elecciones Generales',
                       'width':400,
                       'height':300,
                       animation:{
                        duration: 1000,
                        easing: 'out'
                      }
                      };

        // Instantiate and draw our chart, passing in some options.
        chart.draw(data, options);

        
      }