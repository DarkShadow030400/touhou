// Or with jQuery
$(document).ready(function(){
	$('.datepicker').datepicker();
});

$(document).ready(function(){
	$('select').formselect();
});

$('#Iniciar').click(function(){
	$('#p1').slideDown();
	$('#Iniciar').hide();
});

$('#Siguiente').click(function(){
	if($("#p1").show()){
	   $("#p1").hide();
}