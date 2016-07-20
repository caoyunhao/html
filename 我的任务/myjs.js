// JavaScript Document
var number=1;
var x=1;
var t_id;
var task_name;
var task_content;
var task_date;
var task_time;

$(document).ready(function(e) //点击
{
	$('.ui.toggle.checkbox').checkbox();
	$('.ui.dropdown').dropdown();
	$('.ui.selection.dropdown').dropdown();
	$('.ui.coupled.modal').modal({allowMultiple: false});
});

function Delete_all_u535()  //删除u535任务列表内所有元素
{
	document.getElementById("u535").innerHTML = "";	
}


function Add_task_u535(name)  //在u535任务列表内添加元素
{
	var task = document.createElement("button"); //首先创建一个div
	var task_id='task'+number;
	var func="show_modal(\'"+task_id+"\')";
    task.setAttribute("id",task_id); //定义该div的i
	task.setAttribute("onclick",func);
	task.setAttribute('class', 'no_border');
	task.style.background = "#f2f2f2"; //div颜色
	task.style.width = "950px";
	task.style.height = "45px";
	task.style.marginTop = '10px';
	task.innerHTML=name;//背景层加入页面
	task.style.fontSize= "18px";
	task.style.borderRadius= "15px";
	
	number=number+1;
	
	document.getElementById('u535').appendChild(task); //‘y’为所要添加位置的id		
}



function show_modal(name)  //弹出
{
	t_id=name;
	fresh_table_inf();
	$('.ui.first.modal').modal('show');
}

function create_content(text)  //刷新隐藏
{
	$('.ui.first.modal').modal('refresh');
	$('.ui.first.modal').modal('hide');
	//var procbg = document.createElement('button'); //首先创建一个div
	//procbg.setAttribute('id',x); //定义该div的id
	//procbg.setAttribute('class', 'btn_bgcolor_gray_pale height_45px width_full no_border border_r_15px margin_bottom_22px');
	//procbg.innerHTML=text;
	//++x;
	//document.getElementById("u754").appendChild(procbg);//背景层加入页面
	fersh_button_inf();

}

function fresh_table_inf() //修改标题
{
	task_name= document.getElementById(t_id).innerHTML;
	document.getElementById("task_title").value=task_name;	
}

function fersh_button_inf() //修改按钮信息
{
	task_name = document.getElementById("task_title").value;
	document.getElementById(t_id).innerHTML=task_name;
}


//添加组员
var second_member_num = 1;
function addSecondMember(name){

	var newfield = document.createElement('div'); //创建一个div
	var field_id = 'second_field_id_'+second_member_num;
	newfield.setAttribute('id',field_id); //定义该div的id
	newfield.setAttribute('class', 'field');
	document.getElementById('second_member_list').appendChild(newfield);
	
	var newcheckbox = document.createElement('div'); //创建一个div
	var checkbox_id = 'second_checkbox_id_'+second_member_num;
	newcheckbox.setAttribute('id',checkbox_id);
	newcheckbox.setAttribute('class', 'ui checkbox');
	document.getElementById(field_id).appendChild(newcheckbox);
	
	var newinput = document.createElement('input'); //创建一个input
	var input_id = 'second_input_id_'+second_member_num;
	newinput.setAttribute('id',input_id);
	newinput.setAttribute('type', 'checkbox');
	newinput.setAttribute('name', 'fruit2');
	document.getElementById(checkbox_id).appendChild(newinput);
	
	var newlabel = document.createElement('label'); //创建一个label
	var label_id = 'second_label_id_'+second_member_num;
	newlabel.setAttribute('id',label_id);
	newlabel.innerHTML = name;
	document.getElementById(checkbox_id).appendChild(newlabel);
	++second_member_num;
}

//添加组员
var third_member_num = 1;
function addThirdMember(name){
	var newfield = document.createElement('div'); //创建一个div
	var field_id = 'third_field_id_'+third_member_num;
	newfield.setAttribute('id',field_id); //定义该div的id
	newfield.setAttribute('class', 'field');
	document.getElementById('third_member_list').appendChild(newfield);
	
	var newcheckbox = document.createElement('div'); //创建一个div
	var checkbox_id = 'third_checkbox_id_'+third_member_num;
	newcheckbox.setAttribute('id',checkbox_id);
	newcheckbox.setAttribute('class', 'ui radio checkbox');
	document.getElementById(field_id).appendChild(newcheckbox);
	
	var newinput = document.createElement('input'); //创建一个input
	var input_id = 'third_input_id_'+third_member_num;
	newinput.setAttribute('id',input_id);
	newinput.setAttribute('type', 'radio');
	newinput.setAttribute('name', 'fruit3');
	document.getElementById(checkbox_id).appendChild(newinput);
	
	var newlabel = document.createElement('label'); //创建一个label
	var label_id = 'third_label_id_'+third_member_num;
	newlabel.setAttribute('id',label_id);
	newlabel.innerHTML = name;
	document.getElementById(checkbox_id).appendChild(newlabel);
	++third_member_num;
}

function showFirstModal(){
	$('.ui.first.modal').modal('show');
}
function showSecondModal(){
	$('.ui.second.modal').modal('show');
}
function showThirdModal(){
	$('.ui.third.modal').modal('show');
}
function closeFirstModal(){
	$('.ui.first.modal').modal('hide');
}
function closeSecondModal(){
	showFirstModal();
}
function closeThirdModal(){
	showFirstModal();
}
