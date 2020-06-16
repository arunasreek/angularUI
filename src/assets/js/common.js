$(document).ready(function() {
    $('.dropdown-submenu a.test').on("click", function(e){
   
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });

    $("#cssmenu > ul > li").click(function(){
        $("#cssmenu > ul > li").each(function(){
          alert();
            $(this).removeClass("active");
        });
        $(this).addClass('active');

    });
});