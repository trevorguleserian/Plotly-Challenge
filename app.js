d3.json("samples.json").then(function(data){


// var labels = data.samples.otu_labels.slice(0, 10);
    
// var patient = data.names
// var metaData = Object.values(data.metadata)
// var otuval = data.samples[0].sample_values.slice(0,10)
// var otuname = data.samples[0].otu_labels

// console.log(patient)
// console.log(metaData)
// console.log(otuval)
// console.log(otuname)

// var topten = data.samples[0].otu_id.slice(0,10)

// console.log(topten)


bar_y_labels = []
var ids = data.samples[0].otu_ids.slice(0,10);
for (var i = 0; i < ids.length; i++) {
    labels = 'OTU ' + ids[i];
    bar_y_labels.push(labels);
}

console.log(bar_y_labels)


var trace1 = [{
    type: 'bar',
    y: bar_y_labels.reverse(),
    x: data.samples[0].sample_values.slice(0,10).reverse(),
    text: data.samples[0].otu_labels.slice(0,10).reverse(),
    orientation: 'h'
}];

data1 = [trace1];

var layout1 = {
    showlegend: false,
    title: 'Top 10 OTUs on Patient',
    xaxis: {
        title: {
          text: 'OTU IDs'}}
    };

Plotly.react('bar', data1, layout1)


// Bubble chart
// var trace2 = [{
//     x= data.samples[0].otu_ids, 
//     y= data.samples[0].sample_values,
//     mode = "markers", 
//     text = data.samples[0].otu_labels, 
//     marker = dict(
//         color= data.samples[0].otu_ids,
//         opacity= [1, 0.8, 0.6, 0.4],
//         size=data.samples[0].sample_values)
// }];

// data2 = [trace2];

// var layout2 = {
//     showlegend: false,
//     title: 'Bubble Chart',
//     xaxis: {
//         title: {
//           text: 'OTU IDs'}}
//     };

// Plotly.react('bubble', data2, layout2)
























// function init() {
//     data = [{
//      x: otuval,
//      y: otu_labels,
//      type: "bar"}];
//     Plotly.newPlot("plot", data);
//  }


 
// d3.select("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");

//   // Initialize x and y arrays
//   var x = [];
//   var y = [];

//   if (dataset === 'dataset1') {
//     x = [1, 2, 3, 4, 5];
//     y = [1, 2, 4, 8, 16];
//     type: "bar"
//   }

//   if (dataset === 'dataset2') {
//     x = [10, 20, 30, 40, 50];
//     y = [1, 10, 100, 1000, 10000];
//     type: "bar"
//   }

//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
// }

// init();

// // Horrisontal bar chart trace
// d3.selectAll("#selDataset").on("change", getData);


// var results = reversedData.map(object => object.greekSearchResults)

// var trace1 = {
//     x: results,
//     y: reversedData.map(object => object.greekName),
//     text: reversedData.map(object => object.greekName),
//     name: "Greek",
//     type: "bar",
//     orientation: "h"
//   };
  
//   // data
//   var data = [trace1];
  
//   // Apply the group bar mode to the layout
//   var layout = {
//     title: "Greek gods search results",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };
  
//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("plot", data, layout);


});

