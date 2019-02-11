d3.csv("file.csv").then(makeGraphs);

function makeGraphs(data) {
    var lineGraph = dc.lineChart('#graph-goes-here');

    var parseDate = d3.timeParse("%d/%m/%Y");
    
  
    
    data.forEach(function(d) {
    var tempDate = new Date(d.date);
    });
    
    var ndx = crossfilter(data);
    var ndxDimension = ndx.dimension((d) => d["date"]);
    var ndxSumGroup = ndxDimension.group().reduceSum((d) => d["temp1"]);
    
    console.log(ndxSumGroup.all());
    
    lineGraph
        .height(250)
        .width(700)
        .margins({ top: 10, right: 10, bottom: 20, left: 40 })
        .x(d3.scaleBand())
        .xUnits(dc.units.ordinal)
        .elasticX(true)
        .brushOn(false)
        .xAxisLabel("Date")
        .yAxisLabel("Temperature")
        .yAxis.tickPadding(5)
        .dimension(ndxDimension)
        .group(ndxSumGroup)
    lineGraph.render();
}

