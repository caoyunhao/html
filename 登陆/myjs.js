//var item_num = 1;
$(document).ready(function(e) {
	$('.ui.dropdown.button').dropdown();
});

//
//$(document).ready(function(e) {
//	alert('11');
//	$('.ui.dropdown.button').dropdown();
//});


//function addItem(text){
//	var newitem = document.createElement('div');
//	newitem.setAttribute('class','item');
//	newitem_id = 'newitem_' + item_num;
//	newitem.setAttribute('id', newitem_id);
//	document.getElementById('search_list').appendChild(newitem);
//	
//	var newlabel = document.createElement('div');
//	newlabel.setAttribute('class','ui black empty circular label');
//	document.getElementById(newitem_id).appendChild(newlabel);
//	
//	++item_num;
//}