routerApp.controller("mapCtrl", function($scope, $http) {
	
	$scope.showGoogle= true;
	$scope.showD3 = false
$scope.google = function(){
	$scope.showGoogle= true;
	$scope.showD3 = false
}
$scope.d3 = function(){
	$scope.showGoogle= false;
	$scope.showD3 = true
}
/*==============================================D3 world map===================================*/
var width = 1140,
height = 500;

var initX;
var mouseClicked = false;
var s = 1;
var rotated = 90;
  
//need to store this because on zoom end, using mousewheel, mouse position is NAN
var mouse;
  
var projection = d3.geoMercator()
.scale(153)
.translate([width/2,height/1.5])
.rotate([rotated,0,0]); //center on USA
  
var path = d3.geoPath().projection(projection);
var tooltip = d3.select("body")
.append("div")
.style("position", "absolute")
.style("z-index", "1000")
.style('opacity', 0)
.style("font-family", "sans-serif")
.style("background-color", "grey")
.style("border-radius", "5px")
.style("height", "100px")
.style("width", "150px")
.style("padding", "10px")
.style('color', '#FFFF')
.style("font-size", "12px");

var zoom = d3.zoom()
.scaleExtent([1, 10])
.on("zoom", zoomed)
.on("end", zoomended);

var svg = d3.select("#map").append("svg")
.attr("width", width)
.attr("height", height)
.on("wheel", function() {
  //zoomend needs mouse coords
  initX = d3.mouse(this)[0];
})
.on("mousedown", function() {
  //only if scale === 1
  if(s !== 1) return;
  initX = d3.mouse(this)[0];
  mouseClicked = true;
})
.call(zoom);

var g = svg.append("g");

  
function rotateMap(endX) {
  projection.rotate([rotated + (endX - initX) * 360 / (s * width),0,0]);
  g.selectAll('path').attr('d', path);
}

function zoomended(){
  if(s !== 1) return;
  //rotated = rotated + ((d3.mouse(this)[0] - initX) * 360 / (s * width));
  rotated = rotated + ((mouse[0] - initX) * 360 / (s * width));
  mouseClicked = false;
}  

function zoomed() {
  var t = [d3.event.transform.x,d3.event.transform.y];
  s = d3.event.transform.k;
  var h = 0;

  t[0] = Math.min(
    (width/height)  * (s - 1), 
    Math.max( width * (1 - s), t[0] )
  );

  t[1] = Math.min(
    h * (s - 1) + h * s, 
    Math.max(height  * (1 - s) - h * s, t[1])
  );

  g.attr("transform", "translate(" + t + ")scale(" + s + ")");

  //adjust the stroke width based on zoom level
  d3.selectAll(".boundary").style("stroke-width", 1 / s);

  mouse = d3.mouse(this); 
  
  if(s === 1 && mouseClicked) {
    //rotateMap(d3.mouse(this)[0]);
    rotateMap(mouse[0]);
    return;
  }

}
d3.json("http://enjalot.github.io/wwsd/data/world/world-110m.geojson", function(json) {
	
	$http.get("v1.0/getData").then(function(response) {
		 $scope.myData = response.data;
		 $scope.d3Data=JSON.parse(response.data.data).data;
		 console.log($scope.d3Data);
	  g.selectAll("circle")
                .data($scope.d3Data)
                .enter()
               .append("circle")
                .attr("cx", function(d) {
                	//console.log(d);
                    return projection([d.lng, d.lat])[0];
                })
                .attr("cy", function(d) {
                    return projection([d.lng, d.lat])[1];
                })
                .attr("r", 4)
                .style("fill", "#006400")
                .on("mouseover", function(d){
                 tooltip.transition().style("opacity", 0.9)
                        tooltip .html("Name: " +d.PASSENGER_FIRST_NAME  + "<br/>"+ 'PNR N0:'+d.AIRLINE_PNR_NO +"<br/>"+ 'DESTINATION: ' + d.DESTINATION )
                    .style('left', (d3.event.pageX) + 'px')
      			  	.style('top', (d3.event.pageY) + 'px')
			})
                .on("mousemove", function(event){
                    tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
                })
                .on("mouseout", function(){
                	tooltip.transition().delay(500).style("opacity", 0);
                });
	});

    g.selectAll("path")
       .data(json.features)
       .enter()
       .append("path")
       .attr("d", path);

}); 

	/*==============================================google world map===================================*/
	
	
	
	
	$http.get('v1.0/getData').then(function(response) {
		$scope.markers1=JSON.parse(response.data.data).data;
		$scope.Markers = $scope.markers1.map(function(d){
			return {"passengerName": d.PASSENGER_FIRST_NAME, "origin": d.ORIGIN, "latitude":d.lat, "longitude": d.lng, "destination":d.DESTINATION, "seqNo": d.DOC_SEQ_NO, "pnrNo": d.AIRLINE_PNR_NO}
		});
		
		//console.log($scope.Markers); 
         $scope.MapOptions = {
             center: new google.maps.LatLng($scope.Markers[0].lat, $scope.Markers[0].lng),
             zoom: 5,
             mapTypeId: google.maps.MapTypeId.ROADMAP
         };
//Initializing the InfoWindow, Map and LatLngBounds objects.
         $scope.InfoWindow = new google.maps.InfoWindow();
         $scope.Latlngbounds = new google.maps.LatLngBounds();
         $scope.Map = new google.maps.Map(document.getElementById("dvMap"), $scope.MapOptions);
//Looping through the Array and adding Markers.
         for (var i = 0; i < $scope.Markers.length; i++) {
             var data = $scope.Markers[i];
             var myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
//Initializing the Marker object.
             var marker = new google.maps.Marker({
                 position: myLatlng,
                 map: $scope.Map,
                 title: data.destination
             });
 //Adding InfoWindow to the Marker.
             (function (marker, data) {
                 google.maps.event.addListener(marker, "click", function (e) {
                     $scope.InfoWindow.setContent("<div style = 'width:200px;min-height:50px'>" +"PassengerName:"+ data.passengerName + "<br>"+"PNR No:"+data.pnrNo+"<br>"+"Origin:"+data.origin+"<br>"+"DESTINATION"+data.destination+"</div>");
/*destination: "HEL" latitude: "60.317199707"longitude: "24.963300705" origin: "DEL" passengerName: "ABHIRAMMR" seqNo: "797"*/
/* tooltip .html("Name: " +d.PASSENGER_FIRST_NAME  + "<br/>"+ 'PNR N0:'+d.AIRLINE_PNR_NO +"<br/>"+ 'DESTINATION: ' + d.DESTINATION )
*/                     $scope.InfoWindow.open($scope.Map, marker);
                 });
             })(marker, data);
//Plotting the Marker on the Map.
             $scope.Latlngbounds.extend(marker.position);
         }

//Adjusting the Map for best display.
         $scope.Map.setCenter($scope.Latlngbounds.getCenter());
         $scope.Map.fitBounds($scope.Latlngbounds);
	}, function(response) {
  		
	});

});