
 function loadDoc(x) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = "11";
     }
   };
  xhttp.open("POST", "./cart/"+x, true);
  xhttp.send();
 }

 function a(){
 	alert("123");
 }