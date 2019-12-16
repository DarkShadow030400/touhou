this.logueado = false;

$("#entrar").click(function(){
	if ($("#usuario").val() == "Admin" && $("#contrasena").val() == '123'){
		logueado = true;
		if (logueado == true) {
			window.location = "./pages/Galeria.html"
		}
	}else {
		Swal.fire ('Error');  
	}
});

$("#Galeria2").click(function(){
	window.location="./Galeria2.html"

});

$().click(function(){
	window.location = "";
})

window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});

