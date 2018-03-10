

var rangeChart = dc.barChart("#rangeChart")
          .width(400)
          .height(100)
          .dimension(dimensionByDate)
          .group(groupByDate)
          .x(d3.time.scale().domain([minDate,maxDate]));
  rangeChart.yAxis().ticks(5);
  rangeChart.xAxis().ticks(4);

var lineChart = dc.lineChart('#lineChart')
          .width(550) // width of the chart
          .height(250) // height of the chart
          .rangeChart(rangeChart)
          .renderArea(true)
          .mouseZoomable(true)
          .brushOn(false)
          .dimension(dimensionByDate) // dimention we create before passed as parameter
          .group(rangeGroupByTotal, "Total Payment") // group we created before passed as parameter to barChart method
          .stack(rangeGroupByTip,"tip")
          .xAxisLabel(["Time of the Day"]) // Lebelling the X Axis
          .yAxisLabel("Amount Spend") // // Lebelling the X Axis
          .x(d3.time.scale().domain([minDate,maxDate])) //// created x-axis scales
  lineChart.yAxis().ticks(5);
  lineChart.xAxis().ticks(4);
