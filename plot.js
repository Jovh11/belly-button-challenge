const url = `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`;


var information; 
var desiredInfo;
d3.json(url).then(function(data){
    information = data;
    desiredInfo = information.samples;
    
});

function plotter (data) {
    let xvals = data.sample_values.slice(0,10);
    let yvals = data.otu_ids.slice(0,10);
    yvals.reverse();
    let new_yvals = [];
    for (val of yvals) {
        new_yvals.push(`OTU ${val}`); 
    }
    xvals.reverse();
    let trace1 = {
        x: xvals,
        y: new_yvals,
        text: 'Samples',
        type: 'bar',
        orientation: 'h'
    };
    traceData = [trace1];
    console.log(trace1.x);
    console.log(trace1.y);
    layout = {
        title: 'Top 10 Sample Values'
    };

    Plotly.newPlot('plot', traceData, layout);
    Plotly.newPlot('plot', traceData, layout);
}





// let trace1 = {
//     x: trial.map(x => x.sample_values),
//     y: trial.map(x => x.otu_ids),
//     text: 'Samples',
//     type: 'bar',
//     orientation: 'h'
// };

// traceData = [trace1];

// layout = {
//     title: 'Top 10 Sample Values'
// };

// Plotly.newPlot('plot', traceData, layout);
