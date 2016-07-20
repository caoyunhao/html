// JavaScript Document
//(document).ready()
//{
//	$('.ui.small.test.modal').modal();
//}
function showDiv()
{ 
//以下部分使整个页面至灰不可点击
var procbg = document.createElement("div"); //首先创建一个div
procbg.setAttribute("id","mybg"); //定义该div的id
procbg.style.background = "#000000";
procbg.style.width = "100%";
procbg.style.height = "100%";
procbg.style.position = "fixed";
procbg.style.top = "0";
procbg.style.left = "0";
procbg.style.zIndex = "500";
procbg.style.opacity = "0.6";
procbg.style.filter = "Alpha(opacity=70)";
//背景层加入页面
document.body.appendChild(procbg);
document.body.style.overflow = "hidden"; //取消滚动条

var Idiv = document.getElementById("tanchu");
Idiv.style.display = "block";
////以下部分要将弹出层居中显示
Idiv.style.left=(document.documentElement.clientWidth-Idiv.clientWidth)/2+document.documentElement.scrollLeft+"px";
Idiv.style.top =(document.documentElement.clientHeight-Idiv.clientHeight)/2+document.documentElement.scrollTop-50+"px";
//$('.small.test.modal').modal('show');
}

function closeDiv() //关闭弹出层
{
	var Idiv=document.getElementById("tanchu");
	Idiv.style.display="none";
	document.body.style.overflow = "auto"; //恢复页面滚动条
	var body = document.getElementsByTagName("body");
	var mybg = document.getElementById("mybg");
	body[0].removeChild(mybg);
	//$('.small.test.modal').modal('hide');
}

function createDiv(name)
{
	var procbg = document.createElement("div"); //首先创建一个div
	procbg.setAttribute("id","ui button"); //定义该div的id
	procbg.setAttribute("onclick","showDiv()");
	procbg.setAttribute("tabindex","0");
	procbg.style.background = "#363636";
	procbg.style.width = "210px";
	procbg.style.height = "330px";
	procbg.style.marginLeft="42px";
	procbg.style.marginTop="18px";
	procbg.style.marginBottom="18px";
	procbg.style.cssFloat="left";
	procbg.style.fontSize="large";
	procbg.style.color="#000000";
	procbg.innerHTML=name;
//背景层加入页面
	closeDiv();
	document.getElementById('u159').appendChild(procbg);
	document.getElementById('').value;
}

