function changeColor(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            document.getElementById("color").innerHTML = xhttp.responseText;
            document.getElementById("color").style.color = xhttp.responseText;
        }

    };
    xhttp.open("GET", "/color.html", true);
    xhttp.send();
}

changeColor();