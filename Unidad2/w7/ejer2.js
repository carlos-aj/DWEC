
    function posicion(pos){
        let crd=pos.coords;  

    const platform = new H.service.Platform({
        'apikey': 'NueMz7b8ahNSBSlqQkuIxW22wylzmWI8dfCXP4iL17Q'
    });
    
    // Obtain the default map types from the platform object:
    const defaultLayers = platform.createDefaultLayers();
    
    // Instantiate (and display) a map:
    // Zoom and center parameters are overriden by the bounding box
    // that contains the route and marker objects
    const map = new H.Map(
        document.getElementById("mapContainer"),
        defaultLayers.vector.normal.map, {
            zoom: 7,
            center: { lat: crd.latitude, lng: crd.longitude },
            // Add space around the map edges to ensure markers are not cut off:
            padding: { top: 50, right: 50, bottom: 50, left: 50 }
        });
    
    const origin = { lat: crd.latitude, lng: crd.longitude };
    const destination = { lat: 54.70, lng: 25.24 };
    
    // Create the parameters for the routing request:
    const routingParameters = {
        'routingMode': 'fast',
        'transportMode': 'car',
        // The start point of the route:
        'origin': `${origin.lat},${origin.lng}`,
        // The end point of the route:
        'destination': `${destination.lat},${destination.lng}`,
        // Include the route shape in the response
        'return': 'polyline',
    };
    
    // Define a callback function to process the routing response:
    const onResult = function(result) {
        // Ensure that at least one route was found
        if (result.routes.length) {
            const lineStrings = [];
            result.routes[0].sections.forEach((section) => {
                // Create a linestring to use as a point source for the route line
                lineStrings.push(H.geo.LineString.fromFlexiblePolyline(section.polyline));
            });
    
            // Create an instance of H.geo.MultiLineString
            const multiLineString = new H.geo.MultiLineString(lineStrings);
    
            // Create a polyline to display the route:
            const routeLine = new H.map.Polyline(multiLineString, {
                style: {
                    strokeColor: 'blue',
                    lineWidth: 3
                }
            });
    
            // Create a marker for the start point:
            const startMarker = new H.map.Marker(origin);
    
            // Create a marker for the end point:
            const endMarker = new H.map.Marker(destination);
    
            // Create a H.map.Group to hold all the map objects and enable us to obtain 
            // the bounding box that contains all its objects within
            const group = new H.map.Group();
            group.addObjects([routeLine, startMarker, endMarker]);
            // Add the group to the map
            map.addObject(group);
    
            // Set the map viewport to make the entire route visible:
            map.getViewModel().setLookAtData({
                bounds: group.getBoundingBox()
            });
        };
    };
    
    // Get an instance of the routing service version 8:
    const router = platform.getRoutingService(null, 8);
    
    // Call the calculateRoute() method with the routing parameters,
    // the callback, and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult,
        function(error) {
            alert(error.message);
        });
    
    // MapEvents enables the event system.
    // The behavior variable implements default interactions for pan/zoom (also on mobile touch environments).
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    
    // Enable dynamic resizing of the map, based on the current size of the enclosing container
    window.addEventListener('resize', () => map.getViewPort().resize());

  // Get an instance of the search service:
var service = platform.getSearchService();

// Call the reverse geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
var latitude = toString(crd.latitude);
var longitude = toString(crd.longitude);

service.reverseGeocode({
  at: latitude,longitude
}, (result) => {
  result.items.forEach((item) => {
    // Assumption: ui is instantiated
    // Create an InfoBubble at the returned location with
    // the address as its contents:
    //ui.addBubble(new H.ui.InfoBubble(item.position, {
      //content: item.address.label
    //}));
    console.log(item);
  });
}, alert);


    }



    
    navigator.geolocation.getCurrentPosition(posicion);
    

   