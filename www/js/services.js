angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('CheapestDrink', function($q) {
    //declare global variables
    var map;
    var infowindow;
    var myLatlng;
    var mapOptions;
    var myLocation;
    var initialLocation;
    var request;
    var markers = [];
    var closest;
    
    //GOOGLE MAPS
    myLatlng = new google.maps.LatLng(37.3000, -120.4833);

    mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    

    navigator.geolocation.getCurrentPosition(function(pos) {
       initialLocation = new google.maps.LatLng(pos.coords.latitude,       
                                                     pos.coords.longitude);
        map.setCenter(initialLocation);
        myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, 
                                             pos.coords.longitude),
            map: map,
            title: "My Location"
        });
        
        //call googlePlaces()
        markGooglePlaces(initialLocation);
        
    });
    
    function markGooglePlaces(initialLocation) {
        request = {
            location: initialLocation,
            radius: '16093',
            types: ['bar', 'night_club']
          };  
        
        service = new google.maps.places.PlacesService(map);
        
        service.nearbySearch(request, function(results, status){
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    markers.push(createMarker(results[i]));
                }
                //call findClosest()
                findClosest(closest);
            }   
        });
    }
    
    //Create Marker
    function createMarker(place) {
        infowindow = new google.maps.InfoWindow();
        var placeLoc = place.geometry.location;
        
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
        });
        
        var pos = marker.getPosition(),
            myLoc = myLocation.getPosition(),
            distance=google.maps.geometry.spherical
                      .computeDistanceBetween(pos,myLoc),
            title = marker.getTitle();
          
            if(!closest || closest.distance > distance){
                closest={marker:this, distance:distance, coords: pos, title:title};
            }
            
            
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    };
   
    function findClosest(closest){
//        console.log("titties");
        var deferred = $q.defer();
//        console.log("Name: " + closest.title);
//        console.log("Coords: " + closest.coords);
//        console.log("Distance: " + closest.distance);
        map.setCenter(closest.coords);
        return closest;
    };


  // List of Drinks
  var cheapestDrinks = [
    { id: 0, name: 'Guinness' },
    { id: 1, name: 'House Caberent Red' },
    { id: 2, name: 'Bud Light' },
    { id: 3, name: 'House Pinot Gris White' },
    { id: 4, name: 'Murphy\'s Stout' },
    { id: 5, name: 'Paddy\'s Peppermint' },
    { id: 6, name: 'Bailey\'s Slide' },
    { id: 7, name: 'Pabst Blue Ribbon' }
  ];
    
  return {
    all: function() {
      return cheapestDrinks;
    },
    mapCreated: function() {
        return map;
    },
    barInfo: function() {
        return findClosest(closest);
//        findClosest(closest)
//            .then(function(response) {
//            console.log("poop");
//                if(typeof response.data === 'object') {
//                    console.log(response);
//                    return response.data;
//                } else {
//                    //invalid response....
//                    return $q.reject(response.data);
//                }
//        }, function(response) {
//            //something fucked up
//            return $q.reject(response.data);
//        });
    },
    get: function(cheapestDrinkID) {
      // Simple index lookup
      return cheapestDrinks[cheapestDrinkID];
    }
  }
})

/**
 * Search
 */
.factory('Search', function() {
//    return {
//        
//    };
})

/**
 * Home
 */
.factory('Home', function() {
//    return {
//        
//    };    
})


/**
 * Drive
 */
.factory('Drive', function() {
   
    var transportationList = [
        { id: 0, name: 'Taxi', img: '../img/icons/taxi24.png',
            items: [ 
                {company: "Rochester Cab Taxi Service", cost:1},
                {company: "Rochester NY Taxi", cost:2},
                {company: "Park Avenue Taxi", cost:3},
                {company: "Yellow Cab Air Express", cost:2},
                {company: "Rochester Metro TAXI", cost:3},
                {company: "Airport Taxi Service", cost:1}
            ]
        },
        { id: 1, name: 'Bus', img: '../img/icons/bus3.png',
            items: [ 
                {route: 1, depart: 8, totalTime: 15},
                {route: 6, depart: 6, totalTime: 35},
                {route: 9, depart: 2, totalTime: 10},
                {route: 2, depart: 7, totalTime: 5},
                {route: 7, depart: 5, totalTime: 8},
                {route: 5, depart: 1, totalTime: 25}
            ]
        }
    ];
    
    
    return {
        getList: function() {
            return transportationList;
        }, 
    };
    
    
})

/**
 * Settings
 */
.factory('Settings', function() {
//    return {
//        
//    };    
});

