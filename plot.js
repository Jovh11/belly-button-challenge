const url = `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`;


var information; 
var desiredInfo;
d3.json(url).then(function(data){
    information = data;
    desiredInfo = information.samples;
    
});

function plotter (data) {
    let xvals = data.sample_values;
    let yvals = data.otu_ids;
    yvals.reverse();
    xvals.sort((a,b)=> b-a);
    xvals = xvals.slice(0,10);
    yvals = yvals.slice(0,10);
    xvals.reverse();
    yvals.reverse();
    let new_yvals = [];
    for (val of yvals) {
        new_yvals.push(`OTU ${val}`); 
    }
    yvals.reverse();
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
    layout1 = {
      title: 'Top 10 Sample Values',
    };
    layout2 = {
      title: 'Bubble Plot showing relative amounts of bacteria'
    };
    Plotly.newPlot('bar', traceData, layout1);
    Plotly.newPlot('bubble', traceData2, layout2);
}

function demoInfo(data2) {
        var keys = Object.keys(data2);
        var values = Object.values(data2);
        var ol = document.getElementById('metalist');
        var listy = document.getElementById('metalist');
        listy.innerHTML = '';
        for (let i = 0; i < keys.length; i++) {
            let li = document.createElement('li');
            li.innerText=`${keys[i]}: ${values[i]}`;
            ol.appendChild(li);
        }
        var traceData3 = [
            {
              type: "indicator",
              mode: "number+gauge",
              value: data2.wfreq,
              title: { text: "Wash Frequency", font: { size: 24 } },
              gauge: {
                axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue", tickmode:'array', tickvals:[1,2,3,4,5,6,7,8] },
                bar: { color: "darkblue" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                  { range: [0, 1], color: '#f7fcfd' },
                  { range: [1, 2], color: "#e5f5f9" },
                  { range: [2, 3], color: '#ccece6' },
                  { range: [3, 4], color: '#99d8c9' },
                  { range: [4, 5], color: '#66c2a4' },
                  { range: [5, 6], color: '#41ae76' },
                  { range: [6, 7], color: '#238b45' },
                  { range: [7, 8], color: '#006d2c' },
                  { range: [8, 9], color: '#00441b' }
                ],
                threshold: {
                  line: { color: "red", width: 4 },
                  thickness: 0.75,
                  value: data2.wfreq
                },
                text: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'] 
              }
            }
          ];
          let layout= {
            font: {color:'blue'},
            ids: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9']
          };
        Plotly.newPlot('gauge', traceData3, layout);
    };


