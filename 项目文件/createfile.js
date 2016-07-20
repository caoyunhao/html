// JavaScript Document
var x=1;
function createDiv(name,size,creator,time)
{
	var text="        name        size         creator        time         ";
	var procbg = document.createElement("div"); //首先创建一个div
	var t='p'+x;
	var str="deletethis(\'"+t+"\')";
	procbg.setAttribute("id",t); //定义该div的id
	procbg.style.background = "#363636";
	procbg.style.width = "100%";
	procbg.style.height = "20px";
	
	procbg.innerHTML=name;
//背景层加入页面
	x=x+1;
	var b = document.createElement("button");
	b.setAttribute("onclick",str);
	b.style.height="10px";
	b.style.width="30px";
	procbg.appendChild(b);
	document.getElementById('u377_div').appendChild(procbg);
}

function deletethis(n)
{
	var d=document.getElementById(n);
	var s=d.id;
	
	document.getElementById('u377_div').removeChild(d);
}