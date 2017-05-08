var suggestCallBack; // global var for autocomplete jsonp

$(document).ready(function () {
  var search = jQuery("#search");
    search.autocomplete({
        source: function(request, response) {   
         
        var result = youtube_search( request.term );
        result.execute( function( server ){
          var items = server.items;
          response( items );
          
        });
        
        },
    })

.autocomplete( "instance" )._renderItem = function( ul, item ) {
    if(  !ul.hasClass('list-group')){
      ul.addClass('list-group');
    }
    var snipped = item.snippet
    console.log( item);
    var title = snipped.title;
    var image = snipped.thumbnails.medium.url;
    var img = $('<img  class="img-responsive img-thumbnail">'); //Equivalent: $(document.createElement('img'))
    img.attr('src',image);

  
    return $( "<li class='list-group-item' >" )
    .append( "<a>" + title  + "</a>" ).append(img)
    .appendTo( ul );
};

/*    search.data('autocomplete')._renderItem = function(ul, item) {
        return $('<li></li>')
            .data('item.autocomplete', item)
            .append('<a><img src="' + item.avatar + '" />' + item.name + '<br></a>')
            .appendTo(ul);
    };*/



    // end autocomplete
});


var youtube_search = function( search, response ){

   var resquest =   gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent( search  ).replace(/%20/g, "+"),
            maxResults: 10,
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

