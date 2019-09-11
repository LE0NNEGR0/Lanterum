var ventana = window.innerWidth;
/*alert("el ancho de la ventana es "+ ventana);*/
var menu = document.getElementById("Menu");
menu.style.marginTop="-63%";
var hsmenu = document.getElementById('h-s');
hsmenu.addEventListener("click",function(){

	
	

	if(menu.style.marginTop=="-63%")
	{
		menu.style.marginTop= "60%";
		menu.style.transition="0.3s";

	}
	else
	{
		menu.style.marginTop="-63%";
	menu.style.zIndex="20";
	menu.style.transition="0.3s";
	}
	

});

var redes = document.getElementById('redes');
redes.style.bottom="-100px";
redes.addEventListener("click",function(){


	if(redes.style.bottom=="-100px")
	{

		redes.style.bottom= "100px";
		redes.style.transition="0.3s";
		redes.style.zIndex="19";
	}
	else
	{
		redes.style.bottom="-100px";
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