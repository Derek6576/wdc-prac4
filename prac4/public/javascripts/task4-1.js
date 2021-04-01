var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("timePlace").innerHTML = "This page was last viewed " + xhttp.responseText;
    }
};

xhttp.open("GET", "/last.txt", true);
xhttp.send();