window.onload = function(){
    var hideMe = document.getElementById('hideMe');
    //var showelement = document.getElementById('show-element');
    document.onclick = function(e){
       if(e.target.id !== 'hideMe'){
          hideMe.style.display = 'none';
       }
       if(e.target.id === 'show-element'){
            var element = document.getElementById("to-show");
            if (element.className === "hide") {
            element.className = "show";
            document.getElementsByTagName("body")[0].className = "on";
            document.getElementById("show-element").className = "active";
            } else {
            element.className = "hide";
            document.getElementsByTagName("body")[0].className = "off";
            document.getElementById("show-element").className = "";
        }
       }
    };
 };