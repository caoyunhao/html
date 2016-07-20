// JavaScript Document
var x=1;
var boxid;
var photoid;
var messageid;
var blogid;

var number1=1; //box
var number2=1; //photo
var number3=1; //message
var number4=1; //blog

var message_name; //讨论帖名称
var message_content;  //讨论帖内容
var message_words; //留言


$(document).ready(function(e) //点击
{
	$('.ui.toggle.checkbox').checkbox();
	$('.ui.dropdown').dropdown();
	$('.ui.fullsrceen.modal').modal();
});

function show_modal(name)  //弹出
{
	document.getElementById("message_title").value=""; //清除弹出层内容
	document.getElementById("message_neirong").value="";//同上

	$('.ui.fullsrceen.modal').modal('show');
}

function create_content(text)  //刷新隐藏
{
	$('.ui.fullsrceen.modal').modal('refresh');
	$('.ui.fullsrceen.modal').modal('hide');
	//var procbg = document.createElement('button'); //首先创建一个div
	//procbg.setAttribute('id',x); //定义该div的id
	//procbg.setAttribute('class', 'btn_bgcolor_gray_pale height_45px width_full no_border border_r_15px margin_bottom_22px');
	//procbg.innerHTML=text;
	//++x;
	//document.getElementById("u754").appendChild(procbg);//背景层加入页面
	Add_blog_list();
	Modify_message_list();
	//document.getElementById("message_title").value=""; //清空弹出框讨论帖名称

}




function Add_blog_list(name) //创建新的讨论帖
{
	var blog = document.createElement("button"); //首先创建一个div
	var blog_id="blog"+number2;
	blogid=blog_id;
	blog.setAttribute("id",blog_id); //定义该div的id	
	//var func3="show_modal(\'"+task_id+"\')";
	blog.setAttribute('onclick',"Select_message_list()");
	blog.style.background = "#f2f2f2";
	//photo.style.position = "absolute"; //绝不能打开
	//blog.src = "photo4.png";
	blog.style.width = "305px";
	blog.style.height = "45px";
	blog.style.top = "0";
	blog.style.left = "0";
	//photo.style.zIndex = "500"; //设置浮动 层
	//photo.style.opacity = "1"; //透明度
	//photo.style.filter = "Alpha(opacity=70)";
	//photo.innerHTML=name;//背景层加入页面
	blog.style.marginBottom= "20px";
	blog.style.marginTop= "0px";
	blog.style.marginLeft= "15px";
	blog.style.marginRight= "0px";
	blog.style.color= "black";
	blog.style.fontSize= "18px";
	blog.style.borderRadius= "7px";	
	blog.style.border= "0px";
	
	//photo.style.cssFloat="left";
	
	number2=number2+1;
	
	document.getElementById("liuyanliebiao").appendChild(blog); //‘y’为所要添加位置的id
}


/*function add()
{
	var s=document.getElementById('liuyan').value;
	s=" :"+s+"</br>"+"</br>";
	document.getElementById("suoyouliuyan").insertAdjacentHTML("afterBegin",s);
}

function send()
{
	  var txt = document.getElementById("liuyan").value;
	  document.getElementById("liuyanneirong").innerHTML=txt;
}*/



function Add_all_board() //添加头像和留言到留言块中
{
	var photo = document.createElement("img"); //首先创建一个div
	var photo_id="photo"+number2;
	photoid=photo_id;
	photo.setAttribute("id",photo_id); //定义该div的id	
	//photo.setAttribute('onclick','newliuyan(name)');
	//photo.style.background = "#000000";
	//photo.style.position = "absolute"; //绝不能打开
	photo.src = "photo4.png";
	photo.style.width = "45px";
	photo.style.height = "45px";
	photo.style.top = "0";
	photo.style.left = "0";
	//photo.style.zIndex = "500"; //设置浮动 层
	//photo.style.opacity = "1"; //透明度
	//photo.style.filter = "Alpha(opacity=70)";
	//photo.innerHTML=name;//背景层加入页面
	photo.style.marginBottom= "0px";
	photo.style.marginTop= "20px";
	photo.style.marginLeft= "20px";
	photo.style.marginRight= "0px";
	photo.style.color= "black";
	photo.style.fontSize= "18px";
	photo.style.borderRadius= "7px";	
	
	photo.style.cssFloat="left";
	
	number2=number2+1;
	
	document.getElementById(boxid).appendChild(photo); //‘y’为所要添加位置的id
	
	var message = document.createElement("div"); //首先创建一个div
	var message_id="message"+number3;
	messageid=message_id;
	message.setAttribute("id",messageid); //定义该div的id	
	//message.setAttribute('onclick','newliuyan(name)');

	message.style.background = "#f2f2f2";
	message.style.width = "510px";
	//message.style.height = "45px"; //不可见
	message.style.top = "0";
	message.style.left = "0";
	//message.style.zIndex = "500"; //设置浮动 层
	//message.style.opacity = "1"; //透明度
	//message.style.filter = "Alpha(opacity=70)";
	//message.innerHTML=name;//背景层加入页面
	message.style.wordBreak="break-all";
	message.style.marginBottom= "0px";
	message.style.marginTop= "20px";
	message.style.marginLeft= "100px";
	message.style.marginRight= "0px";
	message.style.color= "black";
	message.style.fontSize= "18px";
	message.style.borderRadius= "7px";
	message.style.lineHeight="25px";	
	
	number3=number3+1;
	
	//message.style.cssFloat="left";
	
	document.getElementById(boxid).appendChild(message); //‘y’为所要添加位置的id
}

/*function Add_message_board() //添加留言
{
	var message = document.createElement("div"); //首先创建一个div
	//message.setAttribute('onclick','newliuyan(name)');
	message.setAttribute("id","mybg"); //定义该div的id
	message.style.background = "#000000";
	message.style.width = "510px";
	message.style.height = "45px";
	message.style.top = "0";
	message.style.left = "0";
	//message.style.zIndex = "500"; //设置浮动 层
	//message.style.opacity = "1"; //透明度
	//message.style.filter = "Alpha(opacity=70)";
	//message.innerHTML=name;//背景层加入页面
	message.style.marginBottom= "0px";
	message.style.marginTop= "20px";
	message.style.marginLeft= "100px";
	message.style.marginRight= "0px";
	message.style.color= "black";
	message.style.fontSize= "18";
	message.style.borderRadius= "7px";	
	
	//message.style.cssFloat="left";
	
	document.getElementById(divid).appendChild(message); //‘y’为所要添加位置的id
}*/


function Add_box_board() //添加留言块到留言板
{
	var box = document.createElement("div"); //首先创建一个div
	var box_id="box"+number1;
	boxid=box_id;
	box.setAttribute("id",box_id); //定义该div的id
	//message.setAttribute('onclick','newliuyan(name)');
	
		
	box.style.background = "#f2f2f2";
	box.style.width = "100%";
	//box.style.height = "100%";
	box.style.top = "0";
	box.style.left = "0";
	//message.style.zIndex = "500"; //设置浮动 层
	//message.style.opacity = "1"; //透明度
	//message.style.filter = "Alpha(opacity=70)";
	//message.innerHTML=name;//背景层加入页面
	//box.style.marginBottom= "20px";
	box.style.marginTop= "0px";
	box.style.marginLeft= "0px";
	box.style.marginRight= "0px";
	box.style.color= "black";
	box.style.fontSize= "18px";
	box.style.borderRadius= "7px";	
	box.style.display="inline-block";
	number1=number1+1;
	document.getElementById('suoyouliuyan').appendChild(box); //‘y’为所要添加位置的id
	Add_all_board();
}

function Delete_board()  //删除留言板内所有元素
{
	document.getElementById("suoyouliuyan").innerHTML = "";	
}

function Select_message_list() //点击讨论帖中的某一项
{
	blogid = event.srcElement.id; //获取点击项的id
	//alert(blogid); 
	Delete_board(); //删除之前留言信息
	Change_board();
}

function Change_board() //修改讨论帖板块信息
{
	message_name = document.getElementById(blogid).innerHTML;
	document.getElementById("liuyanmingcheng").innerHTML=message_name;
	document.getElementById("liuyanneirong").innerHTML=message_content;
}

function Modify_message_list() //改变讨论帖列表中新增项的名称
{
	message_name = document.getElementById("message_title").value;
	document.getElementById(blogid).innerHTML= message_name;
	
	message_content = document.getElementById("message_neirong").value;
	
	document.getElementById("liuyanmingcheng").innerHTML=message_name;
	
	document.getElementById("liuyanneirong").innerHTML=message_content;
}

function Send_message() //发送留言
{
	Add_box_board();
	message_words = document.getElementById("liuyan").value;
	document.getElementById(messageid).innerHTML= message_words;
	document.getElementById("liuyan").value="";
}