$(function(){
  $(".hamburger").click(function(){
    if($(".hamburger").hasClass("active")){
      $(".grobalNavi").hide("drop");
      $(".hamburger").removeClass("active");
    }else{
      $(".grobalNavi").show("drop");
      $(".hamburger").addClass("active");
    }
  });

  $(".grobalNavi").find("a").click(function(){
    if($(".hamburger").hasClass("active")){
      $(".grobalNavi").hide("drop");
      $(".hamburger").removeClass("active");
    }else{
      $(".grobalNavi").show("drop");
      $(".hamburger").addClass("active");
    }
  });

});
