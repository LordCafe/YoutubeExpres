var suggestCallBack; // global var for autocomplete jsonp
var list_temporal = [];


$(document).ready(function () {

 $( "#sortable" ).sortable();
 $( "#sortable" ).disableSelection();
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
   centerMode: true,
  centerPadding: '60px',
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  



  var body =jQuery('body');
  var search = jQuery("#search");
    search.autocomplete({
        source: function(request, response) {   
         
        var result = youtube_search( request.term );
        result.execute( function( server ){
          var items = server.items;
          var div = jQuery("#search_result");
          div.empty();
          list_temporal = [] ;
          response( items );
          
        });
        
        },
    })

.autocomplete( "instance" )._renderItem = function( ul, item ) {
  
    var id = item.id.videoId; 
    var div = jQuery("#search_result");
    var snipped = item.snippet;
    snipped.idvideo = id;
    list_temporal[id] = snipped;
    var title = snipped.title;
    var image = snipped.thumbnails.medium.url;
    var img = $('<img  class="img-responsive ">'); //Equivalent: $(document.createElement('img'))
    img.attr('src',image); 
    return $( "<div id='"+id+"' class='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe select_video' >" )
    .append( img  )
    .appendTo( div );

};



body.on({
click : function (event){
  var object = jQuery(this);
  var id = object.attr('id');
  var video = list_temporal[id];
  var search = jQuery("#search_result");
  search.empty();
  jQuery('#test').append( object );  
  jQuery('.responsive').slick('reinit');
  //player.loadVideoById( id , 0, "large")

}

},'#search_result .select_video');


body.on({
click : function (event){
  var object = jQuery(this);
  var id = object.attr('id');
  player.loadVideoById( id , 0, "large")

}

},'.gallery_product');



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

