// JavaScript Document

var btn_num = 1;
function createBtn(text, target_id){
	var newbtn = document.createElement('button');
	var btn_id = 'btn_num_'+ btn_num;
	newbtn.setAttribute('id',btn_id);
	newbtn.innerHTML=text;
	if(target_id === 'left_list'){
		newbtn.setAttribute('class', 'btn_bgcolor_red width_full border_r_15px text_px18 text_white height_45px no_border hand margin_bottom_20px');
		newbtn.setAttribute('onClick', 'addMember(this.id)');
	}
	else{
		newbtn.setAttribute('class', 'btn_bgcolor_blue width_full border_r_15px text_px18 text_white height_45px no_border hand margin_bottom_20px');
		newbtn.setAttribute('onClick', 'minusMember(this.id)');
	}
	document.getElementById(target_id).appendChild(newbtn);
	++btn_num;
}

function addMember(id){
	var temp = document.getElementById(id);
	var newbtn = document.createElement('button');
	newbtn.setAttribute('id',temp.id);
	newbtn.innerHTML=temp.innerHTML;
	document.getElementById(id).remove();
	newbtn.setAttribute('class', 'btn_bgcolor_green width_full border_r_15px text_px18 text_white height_45px no_border hand margin_bottom_20px');
	newbtn.setAttribute('onClick', 'minusMember(this.id)');
	document.getElementById('right_list').appendChild(newbtn);
}
function minusMember(id){
	var temp = document.getElementById(id);
	var newbtn = document.createElement('button');
	newbtn.setAttribute('id',temp.id);
	newbtn.innerHTML=temp.innerHTML;
	document.getElementById(id).remove();
	newbtn.setAttribute('class', 'btn_bgcolor_red width_full border_r_15px text_px18 text_white height_45px no_border hand margin_bottom_20px');
	newbtn.setAttribute('onClick', 'addMember(this.id)');
	document.getElementById('left_list').appendChild(newbtn);
}