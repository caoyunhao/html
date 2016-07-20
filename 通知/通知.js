$(document).ready(function(e) {
	
})


var button_num = 1;
function createMessage(text){
	var button_id='button_id_'+button_num;
	var newbutton = document.createElement('button');
	newbutton.setAttribute('id',button_id); 
	newbutton.setAttribute('class', 'btn_bgcolor_gray_pale height_60px width_full no_border border_r_15px margin_bottom_22px text_px18');
	newbutton.setAttribute('onClick', 'showDetail()');
	newbutton.innerHTML=text;
	++button_num;
	document.getElementById("u792").appendChild(newbutton);//背景层加入页面
}

function refreshMessage(){
	document.getElementById("u792").innerHTML = "";
}