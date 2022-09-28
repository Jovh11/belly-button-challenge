const theurl = `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`;


var information; 
var desiredInfo;
d3.json(url).then(function(data){
    information = data;
    demographics = information.metadata;
    desiredInfo = information.samples;
    test = desiredInfo[0];
    test2 = demographics[0];
    plotter(test);
    demoInfo(test2);
});

// console.log(desiredInfo);