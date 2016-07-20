$(document).ready(function(e) {
	$('.ui.toggle.checkbox').checkbox();
	$('.ui.dropdown').dropdown();
	$('.ui.fullsrceen.modal').modal();
});

function show_modal(){
	$('.ui.fullsrceen.modal').modal('show');
}

function change_modal(){
	$('.ui.fullsrceen.modal').modal('show');
	document.getElementById("createbtn").style.display="none";
	document.getElementById("changebtn").style.display="block";
}

function change_content(){
	$('.ui.fullsrceneen.modal').modal('refresh');
	$('.ui.fullsrceen.modal').modal('hide');
}

function close_modal(){
	document.getElementById("createbtn").style.display="block";
	document.getElementById("changebtn").style.display="none";
	$('.ui.fullsrceen.modal').modal('hide');
}

var x=1;
function create_content(){
	var text="12232";
	var d=new Date();
	var year=d.getFullYear();
	var month=d.getMonth()+1;
	var day=d.getDate();
	var date;
	if(month<10)
		date=year+"-0"+month+"-"+day;
	else
		date=year+"-"+month+"-"+day;
	alert(document.getElementById("dateinput").value);
	close_modal();
	var procbg = document.createElement('button'); //首先创建一个div
	procbg.setAttribute('id',x); //定义该div的id
	procbg.setAttribute('onclick','change_modal()');
	procbg.style.background = "#363636";
	procbg.style.width = "100%";
	procbg.style.height = "30px";
	procbg.style.marginBottom="10px";
	procbg.innerHTML=text;
	++x;
	if(date==document.getElementById("dateinput").value)
		document.getElementById("u429").appendChild(procbg);//背景层加入页面
	else
		document.getElementById("u438").appendChild(procbg);
}