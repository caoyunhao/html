var member_num = 1;
var icon_num = 1;

$(document).ready(function(e) {
	$('.ui.coupled.modal').modal({allowMultiple: false});
	$('.ui.first.modal').modal('show');
});

function addMemberIcon(name){
	var newdiv = document.createElement('div');
	var newdiv_id = 'member_icon_' + icon_num;
	newdiv.setAttribute('id',newdiv_id);
	newdiv.setAttribute('class','ui green circular icon button');
	newdiv.style.marginBottom = '5px';
	document.getElementById('member_icon_list').appendChild(newdiv);
	
	var newspan = document.createElement('span');//alert('2');
	var newspan_id = 'span_icon_' + icon_num;//alert('3');
	newspan.setAttribute('id',newspan_id);//alert('4');
	newspan.setAttribute('class','text');//alert('5');
	newspan.innerHTML='name';
	document.getElementById(newdiv_id).appendChild(newspan);
	++icon_num;
}




//添加组员
function addMember(string_name){
	var newdiv = document.createElement('div'); //创建一个div
	var div_id = 'div_id_'+member_num;
	newdiv.setAttribute('id',div_id); //定义该div的id
	newdiv.setAttribute('class', 'item_list');
	document.getElementById("member_list").appendChild(newdiv);
	
	var newspan = document.createElement('span'); //创建一个span
	var span_id = 'span_id_'+member_num;
	newspan.setAttribute('id',span_id);
	newspan.innerHTML = string_name+' ';
	//newcheckbox.setAttribute('class', 'ui checkbox');
	document.getElementById(div_id).appendChild(newspan);
	
	var newdiv2 = document.createElement('div'); //创建一个div
	var div2_id = 'div2_id_'+member_num;
	newdiv2.setAttribute('id',div2_id);
	newdiv2.setAttribute('class', 'ui green circular icon button');
	
	var newi = document.createElement('i'); //创建一个i
	var i_id = 'i_id_'+member_num;
	newi.setAttribute('id',i_id);
	newi.setAttribute('class', 'icon add');
	newdiv2.setAttribute('onClick', 'buttonChange(\'' + div2_id + '\',\'' + i_id + '\')');
	document.getElementById(div_id).appendChild(newdiv2);
	document.getElementById(div2_id).appendChild(newi);
	alert(member_num);
	member_num = member_num + 1;
}
function buttonChange(div_id, i_id){
	var ii_id = document.getElementById(i_id).getAttribute('class');
	if(ii_id === 'icon minus'){
		document.getElementById(div_id).setAttribute('class', 'ui green circular icon button');
		document.getElementById(i_id).setAttribute('class', 'icon add');
	}
	else{
		document.getElementById(div_id).setAttribute('class', 'ui red circular icon button');
		document.getElementById(i_id).setAttribute('class', 'icon minus');
	}
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
	$('.ui.first.modal').modal('show');
}