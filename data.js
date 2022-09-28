const theurl = `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`;


var information; 
var desiredInfo;
var demographics;
var names;
d3.json(url).then(function(data){
    information = data;
    demographics = information.metadata;
    desiredInfo = information.samples;
    names = information.names;
    function init(){
        let initnums = desiredInfo[0];
        let initmeta = demographics[0];
        plotter(initnums);
        demoInfo(initmeta);
    }
    let nameArr = Object.values(names);
    var selctor = document.getElementById('selDataset');
    for (let i=0; i< nameArr.length; i++){
        let option = document.createElement('option');
        option.innerHTML=`<option value='${nameArr[i]}'>${nameArr[i]}</option>`
        selctor.appendChild(option);
    };
    d3.selectAll('#selDataset').on('change', allTogether)
    function allTogether(){
        let dropdownMenu = d3.select('#selDataset');
        let dataset = dropdownMenu.property('value');
        let numerical = desiredInfo.filter(i=>i.id==dataset);
        let meta = demographics.filter(i=>i.id==dataset);
        plotter(numerical[0]);
        demoInfo(meta[0]);
    }
    init();
});
