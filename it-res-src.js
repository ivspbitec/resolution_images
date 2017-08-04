
/*######## 1.1 Замена изображений при разном разрешении ###################################################*/	
(function() {

   var irr=function images_resolution_replace(){
      var w=$(window).width();
      var current_prefix=$(window).data('it-current-prefix');
      var resolution_prefix=''; //Префикс разрешения
      var prefixes=['sm','md','lg'];
      if (!resolution_prefix) resolution_prefix=(w>750 && w<=1366)?'md':'';
      if (!resolution_prefix) resolution_prefix=(w>1366)?'lg':'';
      if (!resolution_prefix) resolution_prefix=(w<750)?'sm':'';

      if (!current_prefix || current_prefix!=resolution_prefix){   
         for(n in prefixes){
            $('img['+prefixes[n]+'_src]').each(function(){ 
               var _t=this;
               if(prefixes[n]==resolution_prefix)      
                  $(_t).attr('src',$(_t).attr(resolution_prefix+'_src')).trigger('updated');
               //   else
               //    $(_t).removeAttr('src');
            })   	
         }
         $(window).data('it-current-prefix',resolution_prefix);         
      }
   }

   $(window).on('resize',function(){
      irr();
   })
   irr();

})();   
