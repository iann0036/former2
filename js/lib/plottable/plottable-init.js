$(document).ready(function() {
    var xScale = new Plottable.Scales.Time();
    var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
    xAxis.formatter(Plottable.Formatters.multiTime());
    var yScale = new Plottable.Scales.Linear();
    var yAxis = new Plottable.Axes.Numeric(yScale, "left");
    var colorScale = new Plottable.Scales.Color();

    var series1 = new Plottable.Dataset(makeSeriesData(1000), { name: "series1" });
    var series2 = new Plottable.Dataset(makeSeriesData(1000), { name: "series2" });

    var plot = new Plottable.Plots.Line();
    plot.x(function(d) { return d.x; }, xScale).y(function(d) { return d.y; }, yScale);
    plot.attr("stroke", function(d, i, dataset) { return dataset.metadata().name; }, colorScale);
    plot.addDataset(series1).addDataset(series2);
    plot.autorangeMode("y");

    var sparklineXScale = new Plottable.Scales.Time();
    var sparklineXAxis = new Plottable.Axes.Time(sparklineXScale, "bottom");
    var sparklineYScale = new Plottable.Scales.Linear();
    var sparkline = new Plottable.Plots.Line();
    sparkline.x(function(d) { return d.x; }, sparklineXScale).y(function(d) { return d.y; }, sparklineYScale);
    sparkline.attr("stroke", function(d, i, dataset) { return dataset.metadata().name; }, colorScale);
    sparkline.addDataset(series1).addDataset(series2);

    var dragBox = new Plottable.Components.XDragBoxLayer();
    dragBox.resizable(true);
    dragBox.onDrag(function(bounds) {
        var min = sparklineXScale.invert(bounds.topLeft.x);
        var max = sparklineXScale.invert(bounds.bottomRight.x);
        xScale.domain([min, max]);
    });
    dragBox.onDragEnd(function(bounds) {
        if (bounds.topLeft.x === bounds.bottomRight.x) {
            xScale.domain(sparklineXScale.domain());
        }
    });
    xScale.onUpdate(function() {
        dragBox.boxVisible(true);
        var xDomain = xScale.domain();
        dragBox.bounds({
            topLeft: { x: sparklineXScale.scale(xDomain[0]), y: null },
            bottomRight: { x: sparklineXScale.scale(xDomain[1]), y: null }
        });
    });
    var miniChart = new Plottable.Components.Group([sparkline, dragBox]);

    var pzi = new Plottable.Interactions.PanZoom(xScale, null);
    pzi.attachTo(plot);

    var output = d3.select("#hoverFeedback");
    var outputDefaultText = "Closest:";
    output.text(outputDefaultText);

    var chart = new Plottable.Components.Table([
        [yAxis, plot          ],
        [null , xAxis         ],
        [null , miniChart     ],
        [null , sparklineXAxis]
    ]);
    chart.rowWeight(2, 0.2);
    chart.renderTo("#plottable-finance");

    var crosshair = createCrosshair(plot);
    var pointer = new Plottable.Interactions.Pointer();
    pointer.onPointerMove(function(p) {
        var nearestEntity = plot.entityNearest(p);
        if (nearestEntity.datum == null) {
            return;
        }
        crosshair.drawAt(nearestEntity.position);
        var datum = nearestEntity.datum;
        output.text("Closest: (" + datum.x.toLocaleString() + ", " + datum.y.toFixed(2) + ")");
    });
    pointer.onPointerExit(function() {
        crosshair.hide();
        output.text(outputDefaultText);
    });
    pointer.attachTo(plot);

    function makeSeriesData(n, startDate) {
        startDate = startDate || new Date();
        var startYear = startDate.getUTCFullYear();
        var startMonth = startDate.getUTCMonth();
        var startDay = startDate.getUTCDate();
        var toReturn = new Array(n);
        for (var i = 0; i < n; i++) {
            toReturn[i] = {
                x: new Date(Date.UTC(startYear, startMonth, startDay + i)),
                y: i > 0 ? toReturn[i - 1].y + Math.random() * 2 - 1 : Math.random() * 5
            };
        };
        return toReturn;
    }

    function createCrosshair(plot) {
        var crosshair = {};
        var crosshairContainer = plot.foreground().append("g").style("visibility", "hidden");
        crosshair.vLine = crosshairContainer.append("line")
            .attr("stroke", "black")
            .attr("y1", 0)
            .attr("y2", plot.height());
        crosshair.circle = crosshairContainer.append("circle")
            .attr("stroke", "black")
            .attr("fill", "white")
            .attr("r", 3);
        crosshair.drawAt = function(p) {
            crosshair.vLine.attr({
                x1: p.x,
                x2: p.x
            });
            crosshair.circle.attr({
                cx: p.x,
                cy: p.y
            });
            crosshairContainer.style("visibility", "visible");
        }
        crosshair.hide = function() {
            crosshairContainer.style("visibility", "hidden");
        }
        return crosshair;
    }
});

$(document).ready(function() {
    var xScale = new Plottable.Scales.Time();
    var yScale = new Plottable.Scales.Linear();
    var colorScale = new Plottable.Scales.Color();

    var xAxis = new Plottable.Axes.Time(xScale, "bottom");
    var yAxis = new Plottable.Axes.Numeric(yScale, "left");
    var yLabel = new Plottable.Components.AxisLabel("Temperature (ºF)", -90);

    var legend = new Plottable.Components.Legend(colorScale).maxEntriesPerRow(3);
    var plots = new Plottable.Components.Group();
    var panZoom = new Plottable.Interactions.PanZoom(xScale, null);
    panZoom.attachTo(plots);

    var table = new Plottable.Components.Table([
        [null, legend],
        [yAxis, plots],
        [null, xAxis]
    ]);

    table.renderTo("svg#plottable-weather");

    d3.tsv("data/plottable/data.tsv", function(error, data) {
        var parseDate = d3.time.format("%Y%m%d").parse;
        var cityNames = d3.keys(data[0]).filter(function(key) { return key !== "date"; });
        var cities = cityNames.map(function(name) {
            return data.map(function(d) {
                return { date: parseDate(d.date), temperature: +d[name], name: name};
            });
        });

        cities.forEach(function(city) {
            plots.append(new Plottable.Plots.Line()
                .addDataset(new Plottable.Dataset(city))
                .x(function(d) { return d.date; }, xScale)
                .y(function(d) { return d.temperature; }, yScale)
                .attr("stroke", colorScale.scale(city[0].name))
                .attr("stroke-width", 1)
            );
        });
    });
});

$(document).ready(function() {
    var parseTime = function(dateString) {
        return new Date(dateString);
    };
    var xScale = new Plottable.Scales.Time();
    var yScale = new Plottable.Scales.Category();
    var xAxis = new Plottable.Axes.Time(xScale, "bottom")
        .margin(5)
        .annotationsEnabled(true);

    var fillColorScale = new Plottable.Scales.Color()
        .domain(["USA", "USSR"])
        .range(["#0052A5", "#FF2400"]);

    var legend = new Plottable.Components.Legend(fillColorScale);
    var title = new Plottable.Components.TitleLabel("Space Race", 0)
        .yAlignment("top");

    var timeline = new Plottable.Plots.Scatter()
        .x(function(d) { return parseTime(d.date); }, xScale)
        .y(function() { return 0; }, yScale)
        .size(30)
        .attr("opacity", 1)
        .attr("stroke-width", 1)
        .attr("fill", function(d) {
            return d.country;
        }, fillColorScale)
        .attr("stroke", "#ffffff")

    var guideline = new Plottable.Components.GuideLineLayer("vertical")
        .scale(xScale);

    var group = new Plottable.Components.Group([guideline, timeline, legend, title]);
    var table = new Plottable.Components.Table([[group],
        [xAxis]]);
    table.renderTo("svg#plottable-space-race");

    new Plottable.Interactions.PanZoom(xScale, null)
        .attachTo(timeline)
        .minDomainExtent(xScale, 1000 * 60 * 60 * 24 * 365)
        .maxDomainExtent(xScale, 1000 * 60 * 60 * 24 * 365 * 20)
    ;

    new Plottable.Interactions.Pointer()
        .attachTo(table)
        .onPointerMove(function(p) {
            var entity = timeline.entityNearest(p);
            var date = parseTime(entity.datum.date);
            guideline.value(date);
            xAxis.annotatedTicks([date]);
            title.text(entity.datum.event);
        })
        .onPointerExit(function() {
            guideline.pixelPosition(-10);
            xAxis.annotatedTicks([]);
            title.text("Space Race");
        })
    ;

    d3.json("data/plottable/spacerace.json", function(e, d) {
        var dataset = new Plottable.Dataset(d);
        timeline.addDataset(dataset);
    });
});

$(document).ready(function() {
    var data = [
        { "start": "4/1/2015 9:00:00", "end": "4/1/2015 9:30:00", "task": "Planning" },
        { "start": "4/1/2015 9:30:00", "end": "4/1/2015 10:30:00", "task": "Development" },
        { "start": "4/1/2015 10:30:00", "end": "4/1/2015 10:45:00", "task": "QE" }
    ];

    var colorScale = new Plottable.Scales.Color();

    var xScale = new Plottable.Scales.Time();
    var xAxis = new Plottable.Axes.Time(xScale, "bottom");

    var yScale = new Plottable.Scales.Category();
    var yAxis = new Plottable.Axes.Category(yScale, "left");

    var plot = new Plottable.Plots.Rectangle()
        .x(function(d) { return new Date(d.start); }, xScale)
        .x2(function(d) { return new Date(d.end); }, xScale)
        .y(function(d) { return d.task; }, yScale)
        .attr("fill", function(d) { return d.task; }, colorScale)
        .addDataset(new Plottable.Dataset(data));

    var chart = new Plottable.Components.Table([
        [yAxis, plot],
        [null, xAxis]
    ]);

    chart.renderTo("svg#plottable-gantt-chart");
});

$(document).ready(function() {
    var data = [];
    for (var i = 1; i < 184; i++) {
        data.push({
            date: new Date(2015, 0, i),
            val: 1.5 * Math.random() - 0.5
        });
    }

    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Gets the date of the top left square in the calendar, i.e. the first Sunday on / before Jan 1
    function getFirstDisplayableSunday(date) {
        return new Date(
            date.getFullYear(),
            0,
            1 - new Date(date.getFullYear(), 0, 1).getDay()
        );
    }

    function getWeekOfTheYear(date) {
        var firstSunday = getFirstDisplayableSunday(date);
        var diff = date - firstSunday;
        var oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(Math.ceil(diff / oneDay) / 7);
    }

    function monthFormatter() {
        return function(yearAndWeek) {
            var year = yearAndWeek[0];
            var week = yearAndWeek[1];
            var startOfWeek = new Date(year, 0, (week + 1) * 7 - new Date(year, 0, 1).getDay());
            if (startOfWeek.getDate() > 7) {
                return "";
            }
            return months[startOfWeek.getMonth()];
        }
    }

    var xScale = new Plottable.Scales.Category();
    var yScale = new Plottable.Scales.Category();
    yScale.domain(daysOfWeek);

    var xAxis = new Plottable.Axes.Category(xScale, "bottom");
    var yAxis = new Plottable.Axes.Category(yScale, "left");
    xAxis.formatter(monthFormatter());

    var colorScale = new Plottable.Scales.InterpolatedColor();
    colorScale.domain([0,1]);
    colorScale.range(["#eee", "#d6e685", "#8cc665", "#44a340", "#1e6823"]);

    var plot = new Plottable.Plots.Rectangle()
        .addDataset(new Plottable.Dataset(data))
        .x(function(d) { return [d.date.getFullYear(), getWeekOfTheYear(d.date)] }, xScale)
        .y(function(d) { return daysOfWeek[d.date.getDay()] }, yScale)
        .attr("fill", function(d) { return d.val; }, colorScale)
        .attr("stroke", "#fff")
        .attr("stroke-width", 2);

    var plotHighlighter = new Plottable.Plots.Rectangle()
        .addDataset(new Plottable.Dataset(data))
        .x(function(d) { return [d.date.getFullYear(), getWeekOfTheYear(d.date)] }, xScale)
        .y(function(d) { return daysOfWeek[d.date.getDay()] }, yScale)
        .attr("fill", "black")
        .attr("fill-opacity", 0);

    var group = new Plottable.Components.Group([plot, plotHighlighter]);

    var interaction = new Plottable.Interactions.Pointer();
    interaction.onPointerMove(function(p) {
        var nearestEntity = plotHighlighter.entityNearest(p);
        var hoveredMonth = nearestEntity.datum.date.getMonth();
        plotHighlighter.entities().forEach(function(entity) {
            var date = entity.datum.date;
            entity.selection.attr("fill-opacity", date.getMonth() === hoveredMonth ? 0.5 : 0);
        });
    })
    interaction.onPointerExit(function() {
        plotHighlighter.entities().forEach(function(entity) {
            entity.selection.attr("fill-opacity", 0);
        });
    })
    interaction.attachTo(plot);

    var table = new Plottable.Components.Table([
        [yAxis, group],
        [null,  xAxis]
    ]);

    table.renderTo("svg#plottable-calendar-heatmap");
});

$(document).ready(function() {
    var profitData = [ {x: "profit", y: 0.23} ];
    var profitThresholds = [
        {x: "profit", stage: 0, low: 0,    high: 0.20},
        {x: "profit", stage: 1, low: 0.20, high: 0.25},
        {x: "profit", stage: 2, low: 0.25, high: 0.30}
    ];

    var usersData = [ {x: "newCust", y: 1600} ];
    var usersThresholds = [
        {x: "newCust", stage: 0, low: 0,    high: 1500},
        {x: "newCust", stage: 1, low: 1500, high: 2000},
        {x: "newCust", stage: 2, low: 2000, high: 2500}
    ];

    var salaryData = [ {x: "revenue", y: 280000} ];
    var salaryThresholds = [
        {x: "revenue", stage: 0, low: 0,      high: 150000},
        {x: "revenue", stage: 1, low: 150000, high: 225000},
        {x: "revenue", stage: 2, low: 225000, high: 300000}
    ];

    var salesData = [ {x: "sales", y: 280} ];
    var salesThresholds = [
        {x: "sales", stage: 0, low: 0,   high: 350},
        {x: "sales", stage: 1, low: 350, high: 500},
        {x: "sales", stage: 2, low: 500, high: 600}
    ];

    function createChart(data, thresholds, formatter, title) {
        var xScale = new Plottable.Scales.Category();
        var xScaleBg = new Plottable.Scales.Category();
        var yScale = new Plottable.Scales.Linear()
            .domain([thresholds[0].low, thresholds[thresholds.length - 1].high]);

        var colorScale = new Plottable.Scales.InterpolatedColor()
            .range(["#9ac3f9", "#E3F2FD"]);

        var barPlot = new Plottable.Plots.Bar()
            .x(function(d) { return d.x; }, xScale)
            .y(function(d) { return d.y; }, yScale)
            .attr("fill", "#25383C")
            .addDataset(new Plottable.Dataset(data));

        var bandPlot = new Plottable.Plots.Rectangle()
            .y(function(d) { return d.low; }, yScale)
            .y2(function(d) { return d.high; }, yScale)
            .x(function(d) { return d.x; }, xScaleBg)
            .attr("fill", function(d) { return d.stage; }, colorScale)
            .attr("stroke", function(d) { return d.stage; }, colorScale)
            .addDataset(new Plottable.Dataset(thresholds));

        var yAxis = new Plottable.Axes.Numeric(yScale, "left")
            .formatter(formatter);

        var group = new Plottable.Components.Group([bandPlot, barPlot]);
        var title = new Plottable.Components.TitleLabel(title);

        return new Plottable.Components.Table([
            [null,  title],
            [yAxis, group]
        ]);
    }

    var table = new Plottable.Components.Table([[
        createChart(profitData, profitThresholds, new Plottable.Formatters.percentage(), "Profit"),
        createChart(usersData, usersThresholds, new Plottable.Formatters.general(), "Users"),
        createChart(salaryData, salaryThresholds, new Plottable.Formatters.currency(0), "Salary"),
        createChart(salesData, salesThresholds, new Plottable.Formatters.currency(), "Sales")
    ]]);

    table.renderTo("svg#plottable-bullet-graph");
});