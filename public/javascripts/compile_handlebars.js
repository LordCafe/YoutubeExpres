var scripts = document.getElementsByTagName( 'script' );
console.log( scripts);
for(var i in scripts){
 var type  = scripts[i].type ;

 var script = scripts[i];
 var id = scripts[i].id;
//console.log( i );
 if(type =='handlebars' && id ){
 	console.log( jQuery('#'+id ).html());
   Handlebars.template = Handlebars.template || [];
   Handlebars.template[id]
 }

}