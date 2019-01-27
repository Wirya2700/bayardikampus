$(function() {

    // $('.collapse').collapse('hide');
    $('.list-group-item.active').parent().parent('.collapse').collapse('show');

	// Markdown plain out to bootstrap style
    $('#markdown-content-container table').addClass('table');
    $('#markdown-content-container img').addClass('img-responsive');
	
	filterSelection("all")
	$("#search-box").bind("keypress", {}, keypressInBox);
});

// kirim data ke wa
function sendData(noWa,pesan){
	window.location.href = 'http://api.whatsapp.com/send?phone=' + noWa + '&text=' + pesan;
}

function keypressInBox(e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 13) { //Enter keycode                        
		e.preventDefault();
		filterSelection($("#search-box").val().toLowerCase())
	}
};

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterdiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
	RemoveClass(x[i], "show");
	if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.toLowerCase().split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
	if (arr1.indexOf(arr2[i]) == -1) {
	  element.className += " " + arr2[i];
	}
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.toLowerCase().split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
	while (arr1.indexOf(arr2[i]) > -1) {
	  arr1.splice(arr1.indexOf(arr2[i]), 1); 
	}
  }
  element.className = arr1.join(" ");
}