$(document).ready(function() {
  $("html").removeClass("no-js").addClass("js");
  
  $("ul#nav a").attr("href", "#_");
  
  $("#content").css("height", (Math.max.apply(Math, $(".section").map(function() {
    return $(this).height() + 40;
  }).get())) + "px");
  
  $("ul#nav a").click(function(e) {
    var rel = $(this).attr("rel");
    
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
    
    location.hash = rel;
    $('body').scrollTop(0);
    
    e.preventDefault();
  });

  if ((anchor = document.location.href.match(/#(.*)$/)) != null) {
    $("ul#nav a[rel=" + anchor[1] + "]").not("ul#nav a.active").click();
  }
});
