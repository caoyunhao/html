var needFirstModal = true


$(document).ready(function(e) {
	$('.ui.toggle.checkbox').checkbox();
	$('.ui.dropdown').dropdown();
	$('.ui.coupled.modal').modal({allowMultiple: false});
})
function getWeekNum(){
	var a = document.getElementById('week_num').getAttribute('data-text');
}
function setWeekNum(week_num){
	document.getElementById('week_num').setAttribute('data-text', week_num);
}


var icon_num = 1;
function addMemberIcon(name){
	var newdiv = document.createElement('div');
	var newdiv_id = 'member_icon_' + icon_num;
	newdiv.setAttribute('id',newdiv_id);
	newdiv.setAttribute('class','ui green circular icon button');
	document.getElementById('member_icon_list').appendChild(newdiv);
	var newi = document.createElement('i');
	var newi_id = 'i_icon_' + icon_num;
	newi.setAttribute('id',newi_id);
	newi.setAttribute('class','text');
	newi.innerHTML=name;
	document.getElementById(newdiv_id).appendChild(newi);
	++icon_num;
}

////添加组员
//var member_num = 1;
//function addMember(name){
//	var newfield = document.createElement('div'); //创建一个div
//	var field_id = 'field_id_'+member_num;
//	newfield.setAttribute('id',field_id); //定义该div的id
//	newfield.setAttribute('class', 'field');
//	document.getElementById("member_list").appendChild(newfield);
//	
//	var newcheckbox = document.createElement('div'); //创建一个div
//	var checkbox_id = 'checkbox_id_'+member_num;
//	newcheckbox.setAttribute('id',checkbox_id);
//	newcheckbox.setAttribute('class', 'ui checkbox');
//	document.getElementById(field_id).appendChild(newcheckbox);
//	
//	var newinput = document.createElement('input'); //创建一个input
//	var input_id = 'input_id_'+member_num;
//	newinput.setAttribute('id',input_id);
//	newinput.setAttribute('type', 'checkbox');
//	document.getElementById(checkbox_id).appendChild(newinput);
//	
//	var newlabel = document.createElement('label'); //创建一个label
//	var label_id = 'label_id_'+member_num;
//	newlabel.setAttribute('id',label_id);
//	newlabel.innerHTML = name;
//	document.getElementById(checkbox_id).appendChild(newlabel);
//	++member_num;
//}

//添加组员
var member_num = 1;
function addMember(string_name){
	var newdiv = document.createElement('div'); //创建一个div
	var div_id = 'div_id_'+member_num;
	newdiv.setAttribute('id',div_id); //定义该div的id
	newdiv.setAttribute('class', 'item_list');
	document.getElementById("member_list").appendChild(newdiv);
	
	var newspan = document.createElement('span'); //创建一个div
	var span_id = 'span_id_'+member_num;
	newspan.setAttribute('id',span_id);
	newspan.innerHTML = string_name;
	//newcheckbox.setAttribute('class', 'ui checkbox');
	document.getElementById(div_id).appendChild(newspan);
	
	var newdiv2 = document.createElement('div'); //创建一个input
	var div2_id = 'div2_id_'+member_num;
	newdiv2.setAttribute('id',div2_id);
	newdiv2.setAttribute('class', 'ui green circular icon button');
	newdiv2.setAttribute('onClick', 'button_change('+div2_id+')');
	document.getElementById(div_id).appendChild(newdiv2);
	
	var newi = document.createElement('i'); //创建一个label
	var i_id = 'i_id_'+member_num;
	newi.setAttribute('id',i_id);
	newi.setAttribute('class', 'icon add');
	document.getElementById(div2_id).appendChild(newi);
	++member_num;
}

function addFriend(name){
	
}
function setYear(num){
	document.getElementById('year').innerHTML = num;
}
function setMonth(num){
	document.getElementById('month').innerHTML = num;
}
//day：星期几；time：几年几月几号(string)；has：是否有任务（1或0）
function setWeekButton(day, time, has){
	var day=document.getElementById(day);
	if(has){
		day.style.backgroundColor="rgba(231,76,60,1.00)";
		day.innerHTML=time;
	}
	else{
		day.innerHTML=time;
		day.style.color="black";
	}
}
function buttonChange(string_id){
	alert('a');
	document.getElementById(string_id).setAttribute('class', 'ui red circular icon button');
}
var needCreate = true;
function createNew(text){
	needCreate = true;
	showFirstModal();
}
var button_num = 1;
function createContent(text){
	var button_id='button_id_'+button_num;
	var newbutton = document.createElement('button'); //首先创建一个button
	newbutton.setAttribute('id',button_id); //定义该div的id
	newbutton.setAttribute('class', 'btn_bgcolor_gray_pale height_45px width_full no_border border_r_15px margin_bottom_22px');
	newbutton.setAttribute('onClick', 'editInfo()');
	newbutton.innerHTML=text;
	++button_num;
	document.getElementById("u754").appendChild(newbutton);//背景层加入页面
	closeFirstModal();
}
function editInfo(){
	needCreate = false;
	showFirstModal();
}
function addMemberButton(){
	needFirstModal=true;
	showSecondModal()
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
function selectMember(){
	$('.ui.first.modal').modal('show');
}

function showThirdModal(){
	needFirstModal = false;
	showSecondModal();
}
function closeSecondModal(){
	if(needFirstModal)
		$('.ui.first.modal').modal('show');
	else{
		$('.ui.second.modal').modal('hide');
	}
}