function initMap() {
  // $(document).ready(function() {
    /* google maps -----------------------------------------------------*/
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {

      /* position Chicago */
      var latlng = new google.maps.LatLng(50.4386326, 30.3556419);
      var mapOptions = {
        zoomControl: true,
        zoomControlOptions: {
          position:
          google.maps.ControlPosition.LEFT_TOP
          },
        center: latlng,
        scrollwheel: false,
        zoom: 15,
        /* More styles at https://snazzymaps.com */
        styles: [{
          "featureType": "landscape",
          "stylers": [{
            "saturation": 100
          }, {"hue": "#efcc7d"
          },{
            "lightness": 90
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "poi",
          "stylers": [{
            "saturation": 70
          },
           {"hue": "#efcc7d"
          },{
            "lightness": 0
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "road.highway",
          "stylers": [{
            "saturation": 80
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.arterial",
          "stylers": [{
            "saturation": 80
          }, {
            "lightness": 80
          },
          {"hue": "#efcc7d"
          },{
            "visibility": "on"
          }]
        }, {
          "featureType": "road.local",
          "stylers": [
          {
            "saturation": 100
          },
          {
            "lightness": 20
          },
          {"hue": "#efcc7d" //road names
          },
          {
            "visibility": "on"
          }]
        }, {
          "featureType": "transit",
          "stylers": [{
            "saturation": 80
          },
            {"hue": "#efcc7d"
          },{
            "visibility": "on"
          }]
        }, {
          "featureType": "administrative.province",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [{
            "visibility": "on"
          },
           {"hue": "#efcc7d"
          },{
            "lightness": 50
          }, {
            "saturation": 100
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "hue": "#efcc7d"
          }, {
            "lightness": 25
          }, {
            "saturation": 50
          }]
        }]

        /* End Styles */
      };

// Create our info window content   
    // var infoWindowContent = '<div class="info_content">' +
    //     '<h3>My Location</h3>' +
    //     '<p>This is where you put information about this address</p>' +
    // '</div>';

    // Initialise the inforWindow
    // var infoWindow = new google.maps.InfoWindow({
    //     content: infoWindowContent
    // });
      
      var marker = new google.maps.Marker({
        position: latlng,
        url: '/',
        animation:
        google.maps.Animation.DROP
      });
    // Display our info window when the marker is clicked
    // google.maps.event.addListener(marker, 'click', function() {
    //     infoWindow.open(map, marker);
    // });
      
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      marker.setMap(map);
    };
    /* end google maps -----------------------------------------------------*/
  // });

};