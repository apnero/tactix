jQuery(function ($) {

    'use strict';

    
	
    // ----------------------------------------------
    // # Google Map Customization
    // ----------------------------------------------


    (function(){

        var map;

        map = new GMaps({
            el: '#gmap',
            lat: 41.399095, 
            lng: -73.44344,
            scrollwheel:false,
            zoom: 17,
            zoomControl : true,
            panControl : false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = '';
        map.addMarker({
            lat: 41.3985629,
            lng: -73.44430,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf',
             infoWindow: {
                content: '<div class="map-info"><address>FightTactix<br />190 White Street <br />Danbury</address></div>',
                borderColor: 'red',
            }
        });
          
        var styles = [ 

            {
              "featureType": "road",
              "stylers": [
                { "color": "#c1c1c1" }
              ]
              },{
              "featureType": "landscape",
              "stylers": [
                { "color": "#e3e3e3" }
              ]
              },{
              "elementType": "labels.text.fill",
              "stylers": [
                { "color": "#808080" }
              ]
              },{
              "featureType": "poi",
              "stylers": [
                { "color": "#ffffff" }
              ]
              },{
              "elementType": "labels.text",
              "stylers": [
                { "saturation": 1 },
                { "weight": 0.1 },
                { "color": "#7f8080" }
              ]
            }
      
        ];

    map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });

        map.setStyle("map_style");
    }());

    

}); // script end