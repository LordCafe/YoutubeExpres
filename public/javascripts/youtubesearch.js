var suggestCallBack; // global var for autocomplete jsonp

$(document).ready(function () {
    $("#search").autocomplete({
        source: function(request, response) {       
        var result = youtube_search( request.term );
        result.execute( function( server ){
          console.log( server);
        });
        
        },
    });// end autocomplete
});


var youtube_search = function( search  ){

   var resquest =   gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent( search  ).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
      });
   return resquest;

};















/*
El api de youtube . https://apis.google.com/js/client.js
al cargar onload=init buscara la funcion llamada : init
*/


function init() {
    gapi.client.setApiKey("AIzaSyC9X0c6rhXqZ_NRQAaxLmI7g3VOgQ_9eNk");
    gapi.client.load("youtube", "v3", function() {
      console.log('ready');
    });
}

