

var bubbleChart = dc.bubbleChart("#bubbleChart")
              .width(550)
              .height(250)
              .dimension(bubbleDimension)
              .group(bubbleGroup)
              .clipPadding(60)
              .maxBubbleRelativeSize(0.10)
              .r(d3.scale.linear().domain([1,6]))
              .y(d3.scale.linear().domain([0,200]))
              .x(d3.scale.linear().domain([0,300]))
              .keyAccessor(function(d){ return d.key[0]; })
              .valueAccessor(function(d){ return d.key[1]; })
              .radiusValueAccessor(function(d){ return d.value; })
              .colorAccessor(function(d){ return d.value; })
              .colors(d3.scale.category10())
              .yAxisLabel("Y axis")
              .xAxisLabel("X axis");
bubbleChart.yAxis().ticks(5);
