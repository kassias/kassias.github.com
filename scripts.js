function adjust_height(el) {
  $("#content").css("height", ($(el).height() + 40) + "px");
}

$(document).ready(function() {
  $("html").removeClass("no-js").addClass("js");

  adjust_height($("#content > div:first-child"));
  
  $("ul#nav a").click(function(e) {
    var rel = $(this).attr("rel");
    
    adjust_height($("#" + rel));
    
    $(".section.active").animate({
      opacity: 0
    }, 200, function() {
      $(this).removeClass("active");
      $("#" + rel).addClass("active").animate({
        opacity: 1
      }, 200);
    });
    
    $("ul#nav a.active").removeClass("active");
    $(this).addClass("active");
    
    e.preventDefault();
  });
});
