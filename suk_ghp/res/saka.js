function $(s){return document.querySelector(s)}
function $$(s){return document.querySelectorAll(s)}

function fold(s){
	if($$("oi-veki")[s-1].style.display!="block"){$$("oi-veki")[s-1].style.display="block";$$("a.oi-veki")[s-1].innerText=$$("a.oi-veki")[s-1].getAttribute("close")||"折起";}
	else{$$("oi-veki")[s-1].style.display="";$$("a.oi-veki")[s-1].innerText=$$("a.oi-veki")[s-1].getAttribute("open")||"展开";}
}