// JavaScript Document
var number1=1;
var number2=1;
var s_id;
var schedule_name;

$(document).ready(function(e)  //点击
{
	$('.ui.toggle.checkbox').checkbox();
	$('.ui.dropdown').dropdown();
	$('.ui.fullsrceen.modal').modal();
	$('.ui.selection.dropdown').dropdown();
});

function show_modal(name)  //弹窗
{
	s_id=name;
	fresh_schedule_table_inf();
	$('.ui.fullsrceen.modal').modal('show');
}

function create_content(text)  //隐藏
{
	$('.ui.fullsrceen.modal').modal('refresh');
	$('.ui.fullsrceen.modal').modal('hide');
	//var procbg = document.createElement('button'); //首先创建一个div
	//procbg.setAttribute('id',x); //定义该div的id
	//procbg.setAttribute('class', 'btn_bgcolor_gray_pale height_45px width_full no_border border_r_15px margin_bottom_22px');
	//procbg.innerHTML=text;
	//++x;
	//document.getElementById("u754").appendChild(procbg);//背景层加入页面
	fersh_schedule_button_inf();
}





function Add_schedule_today(name)  //添加今日日程
{
	var today = document.createElement("button"); //首先创建一个div
	var today_id='today'+number1;
	var func="show_modal(\'"+today_id+"\')";
	today.setAttribute("id",today_id); //定义该div的id
	today.setAttribute('onclick',func); 

	today.style.background = "#f2f2f2";
	today.style.width = "460px";
	today.style.height = "45px";
	today.style.top = "0";
	today.style.left = "0";
	today.style.zIndex = "500"; //设置浮动 层
	today.style.opacity = "1"; //透明度
	today.style.filter = "Alpha(opacity=70)";
	today.innerHTML=name;//背景层加入页面
	today.style.marginBottom= "15px";
	today.style.marginTop= "0px";
	today.style.marginLeft= "10px";
	today.style.marginRight= "10px";
	today.style.color= "black";
	today.style.fontSize= "18px";
	today.style.borderRadius= "7px";
	today.style.border = "0px";
	
	number1=number1+1;
	
	document.getElementById('jinriricheng').appendChild(today); //‘y’为所要添加位置的id
}


function Add_schedule_tomorrow(name)   //添加未来日程
{
	var tomorrow = document.createElement("button"); //首先创建一个div
	var tomorrow_id='tomorrow'+number2;
	var func2="show_modal(\'"+tomorrow_id+"\')";
	tomorrow.setAttribute("id",tomorrow_id); //定义该div的id
	tomorrow.setAttribute('onclick',func2); 
	
	
	
	tomorrow.style.background = "#f2f2f2";
	tomorrow.style.width = "460px";
	tomorrow.style.height = "45px";
	tomorrow.style.top = "0";
	tomorrow.style.left = "0";
	tomorrow.style.zIndex = "500"; //设置浮动 层
	tomorrow.style.opacity = "1"; //透明度
	tomorrow.style.filter = "Alpha(opacity=70)";
	tomorrow.innerHTML=name;//背景层加入页面
	tomorrow.style.marginBottom= "15px";
	tomorrow.style.marginTop= "0px";
	tomorrow.style.marginLeft= "10px";
	tomorrow.style.marginRight= "10px";
	tomorrow.style.color= "black";
	tomorrow.style.fontSize= "18px";
	tomorrow.style.borderRadius= "7px";
	tomorrow.style.border = "0px";
	
	number2=number2+1;
	
	document.getElementById('weilairicheng').appendChild(tomorrow); //‘y’为所要添加位置的id
}


function fresh_schedule_table_inf() //修改标题
{
	schedule_name= document.getElementById(s_id).innerHTML;
	document.getElementById("schedule_title").value=schedule_name;	
}

function fersh_schedule_button_inf() //修改按钮信息
{
	schedule_name = document.getElementById("schedule_title").value;
	document.getElementById(s_id).innerHTML=schedule_name;
}

//function test()
//{
//	Add_schedule_today();
//	Add_schedule_tomorrow();
//}


