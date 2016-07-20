// JavaScript Document

var nowdiv;//指示当前div
var nowid;//指示当前任务块id

$(document).ready(function(e) {
	$('.ui.toggle.checkbox').checkbox();
	$('.ui.dropdown').dropdown();
	$('.ui.coupled.modal').modal({allowMultiple: false});
});

function show_modal(state)//新建弹窗
{
	init();
	
	document.getElementById("deletebtn").style.display="none";
	document.getElementById("changebtn").style.display="none";
	document.getElementById("createbtn").style.display="block";
	
	var str="state"+state;
	document.getElementById(str).checked=true;
	$('.ui.first.modal').modal('show');
}

function change_modal(idx,div)
{
	nowdiv=div;
	nowid=idx;
	document.getElementById("sontask").innerHTML="";
	document.getElementById("deletebtn").style.display="block";
	document.getElementById("changebtn").style.display="block";
	document.getElementById("createbtn").style.display="none";
	
	document.getElementById("pri1").checked=true;
	document.getElementById("titleinput").value="";
	document.getElementById("textinput").value="";
	document.getElementById("dateinput").value="";
	$('.ui.first.modal').modal('show');
}

var x=1;

function create_content()//按钮新建
{
	$('.ui.first.modal').modal('refresh');
	$('.ui.first.modal').modal('hide');
	create_div();
}

function create_div()
{
	var text='hello';
	
	var procbg = document.createElement('div'); //首先创建一个div
	var idx=x;//新块id
	var dad;//父块
	procbg.setAttribute('id',x); //定义该div的id
	
	if(document.getElementById("state1").checked)
		dad="u208_div";
	else if(document.getElementById("state2").checked)
		dad="u223_div";
	else if(document.getElementById("state3").checked)
		dad="u236_div";
	else
		dad="u249_div";	
	var str="change_modal(\'"+x+"\'"+",\'"+dad+"\')";
	++x;
	
	procbg.setAttribute('onclick',str);
	procbg.setAttribute('class','ui button');
	if(document.getElementById("pri1").checked)
		procbg.style.background = "#09F";
	else if(document.getElementById("pri2").checked)
		procbg.style.background = "#F90";
	else
		procbg.style.background = "#F00";
	procbg.style.width = "200px";
	procbg.style.height = "50px";
	procbg.style.marginBottom="10px";
	procbg.style.fontSize="large";
	procbg.style.textAlign="center";
	procbg.innerHTML=text;
	
	
	document.getElementById(dad).appendChild(procbg);
}

function change_content()//修改
{
	//此处将新数据传给数据库
	
	var ndad;
	if(document.getElementById("state1").checked)
		ndad="u208_div";
	else if(document.getElementById("state2").checked)
		ndad="u223_div";
	else if(document.getElementById("state3").checked)
		ndad="u236_div";
	else
		ndad="u249_div";	
	
	son=document.getElementById(nowid);
	
	var func="change_modal(\'"+nowid+"\'"+",\'"+ndad+"\')"
	son.setAttribute("onclick",func);
			
	if(document.getElementById("pri1").checked)
		son.style.background = "#09F";
	else if(document.getElementById("pri2").checked)
		son.style.background = "#F90";
	else
		son.style.background = "#F00";
	
	document.getElementById(ndad).appendChild(son);
	
	$('.ui.first.modal').modal('hide');
}

function delete_this()//删除任务
{
	son=document.getElementById(nowid);
	document.getElementById(nowdiv).removeChild(son);
	$('.ui.first.modal').modal('hide');
}

function init()
{
	document.getElementById("pri1").checked=true;
	document.getElementById("titleinput").value="";
	document.getElementById("textinput").value="";
	document.getElementById("dateinput").value="";
	document.getElementById("sontask").innerHTML="";
}

function add_son()
{
	if(document.getElementById("soninput").value=="")
		{alert("任务标题不能为空");}
	else
	{
		var sontitle=document.getElementById("soninput").value;
		var procbg = document.createElement('div');
		procbg.innerHTML=sontitle;
		
		var iid="ic"+x;
		procbg.setAttribute('id',iid);
		procbg.setAttribute('class','ui button');
		var str="delete_son(\'"+iid+"\')";
		procbg.setAttribute("onclick",str);
		
		procbg.style.border="solid thin #09F";
		procbg.style.width = "100px";
		procbg.style.height = "35px";
		procbg.style.borderRadius="5px";
		procbg.style.marginTop="10px";
		procbg.style.marginLeft="20px";
		procbg.style.paddingLeft="5px";
		procbg.style.textAlign="left";
		procbg.style.font="large";
		document.getElementById("sontask").appendChild(procbg);
		document.getElementById("soninput").value="";
	}
}

function delete_son(iid)
{
	document.getElementById("sontask").removeChild(document.getElementById(iid));	
}


//添加任务组员
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

function findMember(){
	var name=document.getElementById('userinput').value;
	if(name!="")
	{
		var newfield = document.createElement('div'); //创建一个div
		var field_id = 'pro_field_id_'+member_num;
		newfield.setAttribute('id',field_id); //定义该div的id
		newfield.setAttribute('class', 'field');
		document.getElementById("pro_member_list").appendChild(newfield);
		
		var newcheckbox = document.createElement('div'); //创建一个div
		var checkbox_id = 'pro_checkbox_id_'+member_num;
		newcheckbox.setAttribute('id',checkbox_id);
		newcheckbox.setAttribute('class', 'ui checkbox');
		document.getElementById(field_id).appendChild(newcheckbox);
		
		var newinput = document.createElement('input'); //创建一个input
		var input_id = 'pro_input_id_'+member_num;
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
	else
	{alert("名称不能为空");}
	document.getElementById('userinput').value="";
}

function showSecondModal(){
	$('.ui.second.modal').modal('show');
}

function closeSecondModal(){
	$('.ui.first.modal').modal('show');
}

function showThirdModal(){
	$('.ui.third.modal').modal('show');
}

function closeThirdModal(){
	$('.ui.third.modal').modal('hide');
}

function delete_pro()
{alert("删除");}

function finish_pro()
{alert("归档");}