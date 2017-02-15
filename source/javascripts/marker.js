$(function () {
  'use strict';

  if($('#google-map').length) {

    var markersController = function() {};

    markersController.prototype = {
      map: undefined,
      addInfoWindow: function(marker, map, htmlContent) {
        var infoWindow = new google.maps.InfoWindow({
          content: htmlContent
        });
        marker.addListener('click', function() {
          infoWindow.open(map, marker);
          $(".gm-style-iw").parent().addClass("map-info");
        });
      }
    };
    var _inst = new markersController();
    window.markersController = _inst

  }
});
