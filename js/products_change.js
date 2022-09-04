"use strict";
$(document).ready(function(){
    $("#cart").text("Your cart is empty");
   $("#arrow1").click(function(){
       
       $(".pro_imagesbox").toggle();
       $(".pro_imagesbox1").toggle();
   });
   $("#arrow2").click(function(){
    $(".pro_imagesbox").toggle();
    $(".pro_imagesbox1").toggle();
});


$("#arrow3").click(function(){
       
    $(".pro_imagesbox3").toggle();
    $(".pro_imagesbox4").toggle();
});
$("#arrow4").click(function(){
 $(".pro_imagesbox3").toggle();
 $(".pro_imagesbox4").toggle();
});
var arr=[];
var flag=0;
$(".b1").click(function(){
    if(flag==0)
    {
    $("#cart").text("");
    flag=1;
    }
    var x = $(this).attr("name");
    $("ol").append("<li>"+x+"</li>");
  
});
$("#clear_cart").click(function(){
   var a= prompt("Are u sure?\nEnter YES to clear.\nEnter NO to keep shopping.");
   if(a=="YES"||a=="yes")
   {
    $("#cart").text("Your cart is empty");
 flag=0;   
}
});
$("#submit_order").click(function(){
  alert("Your order has been placed successfully");
  $("#cart").text("Your cart is empty");
  flag=0;
});
  

  });