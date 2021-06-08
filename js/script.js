$(document).ready(function(){


	//alert

	$('#popup').click(function (){

		alert("hellow friends,Welcome to my page");

	})

	//hide

	$('#hide').click(function(){

		$('.message').hide();

	})

	$('#show').click(function(){
		$('.message').show();
	})

$('#toggle').click(function(){
		$('.message').toggle("slow");
	})


$('#fadein').click(function(){

		$('.info').fadeIn(2000);

	})

	$('#fadeout').click(function(){
		$('.info').fadeOut(2000);  
	})

$('#fadetoggle').click(function(){
		$('.info').fadeToggle(2000);
	})

$('#to').click(function(){
		$('.info').fadeTo(2000,.5);
	})


$('.header').click(function(){
		$('.c_message').slideToggle("fast");
	})


});

