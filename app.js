
// Reading in the json file
d3.json("samples.json").then(function(data){


// Bar Chart
bar_y_labels = []
var ids = data.samples[0].otu_ids.slice(0,10);
for (var i = 0; i < ids.length; i++) {
    labels = 'OTU ' + ids[i];
    bar_y_labels.push(labels);
}


var data1 = [{
    type: 'bar',
    y: bar_y_labels.reverse(),
    x: data.samples[0].sample_values.slice(0,10).reverse(),
    text: data.samples[0].otu_labels.slice(0,10).reverse(),
    orientation: 'h'
}];

var layout1 = {
    showlegend: false,
    title: 'Top Ten Bacteria',
    xaxis: {
        title: {
          text: 'OTU IDs'}}
    };

Plotly.react('bar', data1, layout1)


// Bubble Chart
    var data2 = [{
        x: data.samples[0].otu_ids,
        y: data.samples[0].sample_values,
        mode: 'markers',
        text: data.samples[0].otu_labels,
        marker: {
        color: data.samples[0].otu_ids,
        opacity: [1, 0.8, 0.6, 0.4],
        size: data.samples[0].sample_values
        }
    }];
        
    var layout2 = {
    showlegend: false,
    height: 600,
    width: 1200,
    title: 'Patient Bacteria Samples',
    xaxis: {
        title: {
        text: 'OTU IDs'}}
    };
    
    Plotly.react('bubble', data2, layout2);





     // Demographic Data
    box = d3.selectAll('#sample-metadata');
    metadata = data.metadata[0];

    Object.entries(metadata).forEach(([key,value]) => {
        console.log(`${key}: ${value}`);
        box.append('ul').text(`${key}: ${value}`);
    });

});

d3.selectAll('#selDataset').on('change', getData);


function getData() {
    
    dropdownMenu = d3.select('#selDataset');
    dataset = dropdownMenu.property('value');
    console.log(dataset)
   
    d3.json("samples.json").then(function(data) {   
        selection = data.names
        for (i=0; i < selection.length; i++) {
            if (dataset == selection[i]) {

                    // Bar Plot
                    bar_y_labels = []
                    var ids = data.samples[i].otu_ids.slice(0,10);
                    for (var s = 0; s < ids.length; s++) {
                        labels = 'OTU' + ids[s];
                        bar_y_labels.push(labels);
                    }
            
                    var data1 = [{
                        type: 'bar',
                        y: bar_y_labels.reverse(),
                        x: data.samples[i].sample_values.slice(0,10).reverse(),
                        text: data.samples[i].otu_labels.slice(0,10).reverse(),
                        orientation: 'h'
                    }];

            
                    // Bubble Chart
                    var data2 = [{
                        x: data.samples[i].otu_ids,
                        y: data.samples[i].sample_values,
                        mode: 'markers',
                        text: data.samples[i].otu_labels,
                        marker: {
                        color: data.samples[i].otu_ids,
                        opacity: [1, 0.8, 0.6, 0.4],
                        size: data.samples[i].sample_values
                        }
                    }];
                  
        
                    // Demographic Data
                    box = d3.selectAll('#sample-metadata');
                    metadata = data.metadata[i];

                    Object.entries(metadata).forEach(([key,value]) => {
                        console.log(`${key}: ${value}`);
                        box.append('ul').text(`${key}: ${value}`);
                    });
            updatePlotly(data1, data2, metadata)
                }       
            
            
       } 
    });
        
   
    
}

function updatePlotly(newdata1, newdata2, metadata) {
    var layout1 = {
        showlegend: false,
        title: "Top Ten Bacteria",
        xaxis: {
            title: {
              text: "OTU IDs"}}
        };
    
    var layout2 = {
        showlegend: false,
        height: 600,
        width: 1200,
        title: 'Patient Bacteria Samples',
        xaxis: {
            title: {
              text: 'OTU IDs'}}
        };
    Plotly.react('bar',newdata1, layout1);
    Plotly.react('bubble', newdata2, layout2);

    box = d3.selectAll('#sample-metadata');
    box.html('');
    
    Object.entries(metadata).forEach(([key,value]) => {
        console.log(`${key}: ${value}`);
        box.append('ul').text(`${key}: ${value}`);
    });
}

builtPlot();

























