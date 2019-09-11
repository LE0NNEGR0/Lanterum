var ventana = window.innerWidth;
/*alert("el ancho de la ventana es "+ ventana);*/

var hsmenu = document.getElementById('h-s');
hsmenu.addEventListener("click",function(){
var menu = document.getElementById("Menu");
	

	if(menu.style.marginTop=="550px")
	{
		menu.style.marginTop= "15px";
		menu.style.transition="0.3s";

	}
	else
	{
		menu.style.marginTop="550px";
	menu.style.zIndex="20";
	menu.style.transition="0.3s";
	}
	

});

var redes = document.getElementById('redes');
redes.style.bottom="-110px";
redes.addEventListener("click",function(){


	if(redes.style.bottom=="-110px")
	{

		redes.style.bottom= "10px";
		redes.style.transition="0.3s";
		redes.style.zIndex="19";
	}
	else
	{
		redes.style.bottom="-110px";
		redes.style.zIndex="2";
		redes.style.transition="0.3s";
	}
});

/*function algo(){
location.reload()
}
window.onresize = algo

if (window.onresize==true) {
	location.reload()
}*/

function cambio()
{
	if(window.innerWidth!=ventana)
	{
		location.reload()
	}
}
window.onresize = cambio