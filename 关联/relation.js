// JavaScript Document
var x=1;
function create(rela)
{
	deleteAll();
		
	//if(rela==1)
//		//任务
//	else if(rela==2)
//		//分享
//	else if(rela==3)
//		//文件
//	else
//		//日程
	
	//
	createList();
}

function createList()
{
	var pro = document.createElement('button'); //首先创建一个div
	
	var idx="p"+x;
	pro.setAttribute('id',idx); //定义该div的id
	
	var func="selectThis(\'" + idx +"\')";
	pro.setAttribute('onclick',func);//定义绑定函数
	
	pro.style.background = "#FFF";
	pro.style.width = "100%";
	pro.style.height = "40px";
	pro.style.marginBottom="10px";
	pro.style.border="solid #09F thin";
	pro.style.borderRadius="5px";
	pro.style.textAlign="left";
	pro.style.paddingLeft="10px";
	pro.style.lineHeight="30px";
	pro.style.fontFamily="幼圆";
	
	var name=idx;
	pro.innerHTML=name;
	
	++x;
	document.getElementById("list").appendChild(pro);
}

function deleteAll()
{
	document.getElementById("list").innerHTML="";
}

function selectThis(idx)
{
	//添加关联到数据库
	//返回	
	returnBack();
	alert(idx);
}

function returnBack()
{
	//返回
}