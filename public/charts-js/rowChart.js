

var rowChart = dc.rowChart('#rowChart')
          .width(550) // width of the chart
          .height(200) // height of the chart
          .dimension(rowDimension) // dimention we create beforre passed as parameter
          .group(rowGroup) // group we created before passed as parameter to barChart method
          .gap(20);
