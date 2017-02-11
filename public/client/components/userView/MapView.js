import React from 'react';

export default class MapView extends React.Component {

	constructor(props) {
		super(props)
		console.log("change string: ", props.str);
		
		//console.log(initMap);
	}

	componentDidMount(){
		// var script = document.createElement("script");
		// console.log("this", initMap);
		// script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyAI83WruY4-IgmbI3VdO29t64MfgUfO_ao&libraries=places&callback=initMap';
		// this.instance.appendChild(script);
		this.createMap();
	}
	componentWillReceiveProps() {
		console.log("-------",this.props.str);
		this.createMap();
	}
	createMap() {

		const context = this;
	    /* ########## JSONP call for Google Map data ########## */
	    (function fetchMap() {
	      window.initMap = initMap;
	      const ref = window.document.getElementById('newChallenge');
	      const script = window.document.createElement('script');
	      script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyAI83WruY4-IgmbI3VdO29t64MfgUfO_ao&libraries=places&callback=initMap';
	      ref.parentNode.insertBefore(script, ref);
	      script.onload = function () {
	        this.remove();
	      };
	    })();


		function initMap () {

		      var currentLoc = {lat: -33.867, lng: 151.195};
		      var map;
		      var infowindow;
		      console.log("im in initmap");
		      var success = function (cuurentLocation) {
		        currentLoc.lat = cuurentLocation.coords.latitude;
		        currentLoc.lng = cuurentLocation.coords.longitude;
		        console.log("im in success current location: ", currentLoc);
		        all(currentLoc);

		      }

		      var err = function (err) {
		        console.log("location could not be detected: ",err);
		      }
		    
		      navigator.geolocation.getCurrentPosition(success,err);

		     
		      console.log("my current loaction ",currentLoc); 

		      function all (currentLoc) {
		          //console.log("final curernt location: ", currentLoc);
		               //   currentLoc = {lat: 29.3890, lng: 76.9600};
		               console.log("im in all");
		               console.log("props: ",context.props.str);
		          map = new google.maps.Map(document.getElementById('map'), {
		            center: currentLoc,
		            zoom: 15
		          });

		          var request = {
		            location: currentLoc,
		            radius: '500',
		            query: context.props.str || 'gym'
		          };
		          console.log("STILL GYM OR NAH THO");

		          infowindow = new google.maps.InfoWindow();
		          var service = new google.maps.places.PlacesService(map);
		          service.textSearch(request, callback);

		          function callback(results, status) {
		            if (status === google.maps.places.PlacesServiceStatus.OK) {
		              for (var i = 0; i < results.length; i++) {
		                createMarker(results[i]);
		              }
		            }
		          }

		          function createMarker(place) {
		            var placeLoc = place.geometry.location;
		            //console.log("placeLoc: ", placeLoc);

		            var marker = new google.maps.Marker({
		              map: map,
		              position: place.geometry.location
		            });

		           // console.log("marker: ", marker);
		            google.maps.event.addListener(marker, 'click', function() {
		              // console.log("map: ", map);
		              // console.log("place: ", place);
		           
		              infowindow.setContent(place.name);
		              context.props.renderAddress(place.formatted_address);
		              // render the address on the page;
		              console.log("address: ", place.formatted_address);
		             // infowindow.setContent(place.formatted_address)
		              infowindow.open(map, this);
		            });
		          }
		      }
		     // setTimeout(all, 15000);

		 }
	}

     // setTimeout(all, 15000);

  

	render () {
		return (

			<div id="map">
			</div>
		)

		
		
	}
	

}




