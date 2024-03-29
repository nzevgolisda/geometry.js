function getrandom(num , mul) 
	{
	 var value = [ ];
	 for(i=0;i<=num;i++)
	 {
	  var rand = Math.random() * mul;
	  value.push(rand);
	 }
	 return value;
	}

var data=[
    {
     opacity:0.4,type: 'scatter3d',
     x: getrandom(50 , 75),
     y: getrandom(50 , 75),
     z: getrandom(50 , 75),
     mode:'markers'
    },
	{
	 opacity: 0.5,
	 type: 'scatter3d',
	 x: getrandom(75 , 75),
	 y: getrandom(75 , 75),
	 z: getrandom(75 , 75),
	 mode:'markers'
	},
	{
	 opacity: 0.5,
	 type: 'scatter3d',
	 x: getrandom(75 , 100),
	 y: getrandom(75 , 100),
	 z: getrandom(75 , 100),
	 mode:'markers'
	}
];
var layout = {
   scene:{
	xaxis: {
	 backgroundcolor: "rgb(200, 200, 230)",
	 gridcolor: "rgb(255, 255, 255)",
	 showbackground: true,
	 zerolinecolor: "rgb(255, 255, 255)",
	}, 
    yaxis: {
     backgroundcolor: "rgb(230, 200,230)",
     gridcolor: "rgb(255, 255, 255)",
     showbackground: true,
     zerolinecolor: "rgb(255, 255, 255)"
    }, 
    zaxis: {
     backgroundcolor: "rgb(230, 230,200)",
     gridcolor: "rgb(255, 255, 255)",
     showbackground: true,
     zerolinecolor: "rgb(255, 255, 255)"
    }}
};
Plotly.newPlot('myDiv', data, layout);