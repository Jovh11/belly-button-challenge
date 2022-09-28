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
    let bub_x = data.otu_ids;
    let bub_y = data.sample_values;
    bub_x.reverse();
    bub_y.reverse();
    let trace2 = {
        x: bub_x,
        y: bub_y,
        xaxis: 'x2',
        yaxis: 'y2',
        text: data.otu_labels,
        mode: 'markers',
        marker: {
            size: data.sample_values,
            color: data.otu_ids,
        }
    };
    traceData = [trace1];
    traceData2 = [trace2];
    console.log(trace1.x);
    console.log(trace1.y);
    layout = {
        title: 'Top 10 Sample Values',
        // grid: {rows: 1, columns: 2, pattern: 'independent', roworder: 'bottom to top'}
    };

    Plotly.newPlot('bar', traceData, layout);
    Plotly.newPlot('bubble', traceData2, layout);

}

function demoInfo(data2) {
        var keys = Object.keys(data2);
        var values = Object.values(data2);
        var ol = document.getElementById('metalist');
        // ol.createElement('ol');
        for (let i = 0; i < keys.length; i++) {
            let li = document.createElement('li');
            li.innerText=`${keys[i]}: ${values[i]}`;
            ol.appendChild(li);
        }
        // document.getElementById('sample-metadata').appendChild(ol);
    };

// Create the HTML list var ol = document.createElement("ol");
// Loop through the array and append list items for (let i of ARRAY) { let li = document.createElement("li"); li.innerHTML = i; ol.appendChild(li); }
// Append the list to where you want document.getElementById("TARGET").appendChild(ol);



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
