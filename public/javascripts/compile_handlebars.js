var scripts = document.getElementsByTagName( 'script' );

for(var i in scripts){
 var type  = scripts[i].type ;
 var id = scripts[i].id;
 if(type === 'handlebars'){
   Handlebars.template = Handlebars.template || [];
   Handlebars.template[id]
 }

}