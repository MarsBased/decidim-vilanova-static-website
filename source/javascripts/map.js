$(function () {
  'use strict';

  if($('#google-map').length) {
    var markersController = window.markersController;

    var mapsController = function() {};
    mapsController.prototype = {
      init: function() {
        _inst.map = new google.maps.Map($('#google-map')[0], {
         //barcelona coordinates
          center: { lat: 41.3851, lng: 2.1734 },
          zoom: 12,
          scrollwheel: false
        });
      },
      latLng: function(lat, lng) {
        return { lat: lat, lng: lng }
      },
      addMarker: function(lat, lng, infoWindowContent) {
        var marker = new google.maps.Marker({
          position: _inst.latLng(lat, lng),
          icon: decidimMarker,
          map: _inst.map
        });
        if(infoWindowContent) {
          markersController.addInfoWindow(marker, _inst.map, infoWindowContent );
        }
        
      }

    };

    function markerTemplate(meetingTitle, meetingDesc, meetingDay, meetingMonth, meetingTime, meetingPlace, meetingAddress, meetingCity, meetingLink){ 
      var markerTemplate = '<div class="map-info__content">'+
      '<h3>'+meetingTitle+'</h3>'+
      '<div id="bodyContent">'+
      '<p>'+meetingDesc+'</p>'+
      '<div class="map__date-adress">'+
      '<div class="card__datetime">'+
      '<div class="card__datetime__date">'+
      meetingDay+'<span class="card__datetime__month">'+
      meetingMonth+'</span>'+
      '</div>'+
      '<div class="card__datetime__time">'+
      meetingTime+
      '</div>'+
      '</div>'+
      '<div class="address card__extra">'+
      '<div class="address__icon">'+
      '<svg width="40" height="70">'+
      '<use xlink:href="/images/icons.svg#icon-meetings" />'+
      '</svg>'+
      '</div>'+
      '<div class="address__details">'+
      '<strong>'+meetingPlace+'</strong><br>'+
      '<span>'+meetingAddress+'</span><br>'+
      '<span>'+meetingCity+'</span>'+
      '</div>'+
      '</div>'+
      '</div>'+
      '<div class="map-info__button">'+
      '<a href="'+meetingLink+'" class="button button--sc">Ver encuentro</a>'+
      '</div>'+
      '</div>'+
      '</div>';
      return markerTemplate;
    }
    
    var decidimMarker = {
    path: 'M18,6.78a7.79,7.79,0,0,0-7.79,7.79c0,7.5,6.82,13.74,7.11,14a1,1,0,0,0,1.35,0c0.29-.29,7.11-6.54,7.11-14A7.79,7.79,0,0,0,18,6.78Zm0,11.61A3.39,3.39,0,1,1,21.39,15,3.39,3.39,0,0,1,18,18.39Z',
    fillColor: '#ef604d',
    fillOpacity: 1,
    strokeColor: 'transparent',
    scale: 1.6
    };
    
    var _inst = new mapsController();
    _inst.init();
    _inst.addMarker(41.3851, 2.1734, markerTemplate(
      'Consell de les dones de Barcelona',
      'Recollir, en sessió oberta al carrer, propostes per millorar la convivència i l´ús de l´espai públic al barri',
      '20',
      'Ago',
      '16:00 - 18:00',
      'Seu del Districte Sants-Montjuïc',
      'Carrer de la Creu Coberta, 104',
      'Barcelona',
      '/meeting-view'
    ));
    _inst.addMarker(41.3400, 2.0900, markerTemplate(
      'Trobada amb el regidor',
      'Recollir, en sessió oberta al carrer, propostes per millorar la convivència i l´ús de l´espai públic al barri',
      '20',
      'Ago',
      '16:00 - 18:00',
      'Seu del Districte Sants-Montjuïc',
      'Carrer de la Creu Coberta, 104',
      'Barcelona',
      '/meeting-view'
    ));
    _inst.addMarker(41.4300, 2.1900, markerTemplate(
      'Consell de barri',
      'Recollir, en sessió oberta al carrer, propostes per millorar la convivència i l´ús de l´espai públic al barri',
      '20',
      'Ago',
      '16:00 - 18:00',
      'Seu del Districte Sants-Montjuïc',
      'Carrer de la Creu Coberta, 104',
      'Barcelona',
      '/meeting-view'
    ));
  }
});
