

var dataTable = dc.dataTable("#dataTable")
      .width(550)
      .height(350)
      .dimension(dimensionByDate)
      .showGroups(false)
      //.size(7)
      .group(function(d){ return d.type; })
      .columns([{label:'Time',format: function(d){ return d.date.getHours()+':'+d.date.getMinutes(); }},
                'quantity',
                'total',
                'tip',
                'type',

            ])
      .sortBy(function(d){ return d.type; })
      .order(d3.descending);
