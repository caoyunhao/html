$(document).ready(function(e) {
	$('.ui.toggle.checkbox').checkbox();
	$('.ui.dropdown').dropdown();
	$('.ui.coupled.modal').modal({allowMultiple: false});
});

function show_modal(){
	document.getElementById("tanchu").isnew=1;
	document.getElementById("titleinput").value="";
	document.getElementById("textinput").value="";
	document.getElementById("checkinput").value="";
	$('.ui.first.modal').modal('show');
}

function change_modal()
{
	document.getElementById("tanchu").isnew=0;
	document.getElementById("titleinput").value=document.getElementById("u317_input").value;
	document.getElementById("textinput").value="";
	document.getElementById("checkinput").value="";
	$('.ui.first.modal').modal('show');
}

var x=1;
var c="";
function create_content(isnew){
	var text=document.getElementById("titleinput").value;
	$('.ui.first.modal').modal('refresh');
	$('.ui.first.modal').modal('hide');
	alert(document.getElementById("tanchu").isnew);
	if(document.getElementById("tanchu").isnew==1)//新建
	{
	var procbg = document.createElement('button'); //首先创建一个div
	var idx="newbtn"+x;
	procbg.setAttribute('id',idx); //定义该div的id
	
	var func="show_title(\'"+idx+"\')";
	procbg.setAttribute("onclick",func); 
	procbg.style.background = "#3AD1E9";
	procbg.style.width = "100%";
	procbg.style.height = "40px";
	procbg.style.borderRadius = "5px";
	procbg.style.fontSize="large";
	procbg.style.color="#FFFFFF";
	procbg.style.border="none";
	
	procbg.style.paddingLeft="10px";
	procbg.style.textAlign="left";
	procbg.style.marginBottom="10px";
	procbg.innerHTML=text;
	++x;
	document.getElementById("u300_div").appendChild(procbg);//背景层加入页面
	c=idx;
	show_title(idx);
	}
	else//修改
	{
		document.getElementById(c).innerHTML=text;
		document.getElementById("u317_input").value="";
		document.getElementById("u317_div").innerHTML="";
	}
	
}

function show_title(id)
{
	c=id
	document.getElementById("u320_div").style.display="block";
	document.getElementById("u317_input").value=document.getElementById(id).innerHTML;
}
//
//
//*********************************************************************
//
//添加组员
var member_num = 1;
function addMember(name){
	var newfield = document.createElement('div'); //创建一个div
	var field_id = 'field_id_'+member_num;
	newfield.setAttribute('id',field_id); //定义该div的id
	newfield.setAttribute('class', 'field');
	document.getElementById("member_list").appendChild(newfield);
	
	var newcheckbox = document.createElement('div'); //创建一个div
	var checkbox_id = 'checkbox_id_'+member_num;
	newcheckbox.setAttribute('id',checkbox_id);
	newcheckbox.setAttribute('class', 'ui checkbox');
	document.getElementById(field_id).appendChild(newcheckbox);
	
	var newinput = document.createElement('input'); //创建一个input
	var input_id = 'input_id_'+member_num;
	newinput.setAttribute('id',input_id);
	newinput.setAttribute('type', 'checkbox');
	document.getElementById(checkbox_id).appendChild(newinput);
	
	var newlabel = document.createElement('label'); //创建一个label
	var label_id = 'label_id_'+member_num;
	newlabel.setAttribute('id',label_id);
	newlabel.innerHTML = name;
	document.getElementById(checkbox_id).appendChild(newlabel);
	++member_num;
}
function showFirstModal(){
	$('.ui.first.modal').modal('show');
}
function showSecondModal(){
	$('.ui.second.modal').modal('show');
}
function closeFirstModal(){
	$('.ui.first.modal').modal('hide');
}
function closeSecondModal(){
	$('.ui.first.modal').modal('show');
}