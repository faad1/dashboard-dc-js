

var moveChart = dc.compositeChart('#compositeChart')
          .width(550) // width of the chart
          .height(250) // height of the chart
          .xAxisLabel(["Time of the Day"]) // Lebelling the X Axis
          .yAxisLabel("Amount Spend") // Left lebelling the y-axis
          .rightYAxisLabel("Tip")
          .shareTitle(false)
          .transitionDuration(1000)
          .renderHorizontalGridLines(true)
          .brushOn(false)
          .dimension(dimensionByDate) // dimention we create before passed as parameter
          .x(d3.time.scale().domain([minDate,maxDate])) // created x-axis scales
          .legend(dc.legend().x(300).y(20).itemHeight(15).gap(5))
          .compose([
              dc.lineChart("moveChart")
                  .group(compGroupByTotal, "Total Payment")
                  //.renderArea(true)
                  .ordinalColors(["black"]),

                  dc.lineChart("moveChart")
                  .group(compGroupByTip, "Tip")
                  .ordinalColors(["orange"])
                  //.renderArea(true)
                  .useRightYAxis(true)

          ])

  moveChart.xAxis().ticks(4);
  moveChart.yAxis().ticks(5);
  moveChart.rightYAxis().ticks(5);
