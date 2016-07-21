var item_num=1;
var res = new Array();

$(document).ready(function(e) {
	$('.ui.dropdown.button').dropdown();
});

function addItem(text){
	var newitem = document.createElement('div');
	newitem.setAttribute('class','item');
	newitem_id = 'newitem_' + item_num;
	res.push(newitem_id);
	newitem.setAttribute('id', newitem_id);
	newitem.setAttribute('onClick', 'jump(this.id)');
	document.getElementById('search_list').appendChild(newitem);
	
	var newlabel = document.createElement('div');
	newlabel.setAttribute('class','ui red empty circular label');
	document.getElementById(newitem_id).appendChild(newlabel);
	
	var newspan = document.createElement('span');
	newspan.innerHTML = text;
	document.getElementById(newitem_id).appendChild(newspan);
	
	++item_num;
}

function jump(id){
	refreshResu();
}

function refreshResu(){
	alert(res.length);
	var n = res.length;
	for(var i=0; i<n; ++i){
		document.getElementById(res.pop()).remove();
	}	
}