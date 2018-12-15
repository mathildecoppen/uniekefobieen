$(document).ready(function(){
    $("#linkerMenu").click(function(e) {
        $("span.glyphicon").toggleClass('glyphicon-menu-hamburger glyphicon-remove');
        $(this).toggleClass('closeMenu openMenu');
    });
  })
