/*
     Filename: main.css
  
     Author: David Shenouda
     Date: 11/11/21   
 */

function computearea(r){
	return Math.PI*r*r;
}

$(document).ready(function(){
$("#calculatearea").click(function() {
    
    
    var p = $("#precision :selected").text();
    var r = $("#radius").val();
    var a =computearea(r);
    $("#area").val(a.toFixed(p));
});
});



