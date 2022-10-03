$(document).ready(function() {
  var currentSection = 0;
  $('#hasil').hide();
  $('#menu a').click(function() {       
      $('#menu a').removeClass('active');
      $(this).addClass('active');
      var href = $(this).attr('href');
      $('#hasiljuga>div').hide();
      $(href).show();
      if(currentSection == 0){
          $('#hasil').slideToggle(200);
          currentSection = href;
      }else if(currentSection == href){
           $('#hasil').slideToggle(200);
           currentSection = 0;    
      }else{
          currentSection = href;
      }
      return false;
  });
});