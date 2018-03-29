 
var store = [];
	$(function() {
		   $.getJSON('json/data.json', function(data) 
				   {
			
			   $.each(data.map, function(i, f){
				   //store.push(f.Latitude,f.Longitude,f.City)
store.push(data.map[i].Latitude,data.map[i].Longitude,data.map[i].City);
		     });
			   
			   console.log("store data:"+store);
		  
		   
			var center = new google.maps.LatLng(20.5937, 78.9629);

			var map = new google.maps.Map(document.getElementById('map'), {
				zoom :5,
				center : center,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			});

			var infowindow = new google.maps.InfoWindow();

			var markers = [];
			var bounds = new google.maps.LatLngBounds();
			 

			for (var i = 0; i < store.length; i++) {
				 console.log("in loop:"+store);
				var latLng = new google.maps.LatLng(store[i][0],
						store[i][1]);
			console.log("latlng is:" +latLng);
				bounds.extend(latLng);
				var marker = new google.maps.Marker({
					position : latLng
				});
				markers.push(marker);
					google.maps.event.addListener(marker,'mouseover',
								(function(marker, i) {
									return function() {
								var aa = store[i][2] + store[i][2];
										//	alert(aa);
			console.log("here is  looping inside:" +aa);

										var contentString = '<a href="#" id="'
												+ aa
												+ '" title="click to view passenger list" onclick="newtab()">'
												+ '    '
												+ store[i][2]
												+ '</a>';
										infowindow
												.setContent("<b>Welcome</b><br>   Location:"
														+ store[i][2]
														+ "  <br>View Retailerlist along with Revenues:"
														+ contentString); //infowindow.setContent("hello");
										infowindow.open(map, marker);
										//alert(contentString);

										test(aa);
									}
								})(marker, i));

			}

			var markerCluster = new MarkerClusterer(map, markers);
		google.maps.event.addDomListener(window, 'load', initialize);

		function newtab()
		{
			 window.open('table.jsp','_blank');
	
	}
		function test(b) {

		}				

		
		function closeTo1() {

			document.getElementById("div_inner").style.display = 'NONE';
		}

		function closeTopnr() {

			document.getElementById("div_inner1").style.display = 'NONE';

		}

		function access() {

			alert("Access Denied");

		}

		 var xmlHttp;
		function closeTo3(a) {
		alert("into this");
			document.getElementById("div_inner").style.display = 'BLOCK';
			document.getElementById("div_inner_loading").style.display = 'BLOCK';
			//s	document.getElementById("div_inner1").style.display='NONE';

			if (typeof XMLHttpRequest != "undefined") {
				xmlHttp = new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			if (xmlHttp == null) {
				alert("Browser does not support XMLHTTP Request")
				return;
			}
			

			var idconf = a.substring(13);
			var idconf1 = a.substring(0, 3);
			var idconf2 = a.substring(3, 13);

			//var url ="google_pnr.jsp?id="+idconf
			var url = "google_pnr.jsp?id=" + idconf + "&&id1=" + idconf1
					+ "&&id2=" + idconf2;
			xmlHttp.onreadystatechange = stateChange1;
			xmlHttp.open("GET", url, true);
			xmlHttp.send(null);
		} 

		function stateChange1() {

			if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
				
				document.getElementById("div_inner1").innerHTML = xmlHttp.responseText
				document.getElementById("div_inner_loading").style.display = 'NONE';

				document.getElementById("div_inner1").style.display = 'BLOCK';

				

			}
		}


		function stateChange() {

			if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
				document.getElementById("div_inner").innerHTML = xmlHttp.responseText
				document.getElementById("div_inner_loading").style.display = 'NONE';
				document.getElementById("div_inner").style.display = 'BLOCK';

			}
		};
	});
		   
	 });
	 