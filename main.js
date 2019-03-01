
$(document).ready(function(){
	$(".navbar-nav li a:not(#pocetna_link)").click(function (e){
  		e.preventDefault();
  	    var selected = $(this).attr("href");
    	$( selected ).show("slow").siblings().hide("slow");
    });
});
$(".main").mouseleave(function(){
	$(".sekcija").hide("slow");
   });
	 $(".Main_container").on("click", function(event){
	     $(".sekcija").hide("slow");
			 $(".navbar-collapse").hide("slow");
	 });

$('.back-to-top').click(function() {
              $('html, body').animate({scrollTop:0}, 1000);
            });
