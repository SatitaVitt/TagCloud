var data = [
    {"x": "Diving Certification", "value": 10, "flap": "Got Open Water Diving Certification in 2019!", "key": 0},
    {"x": "Learnt video editting in 4hrs", "value": 10, "flap": "I really can't think of anything to give for my dad's birthday this year lol, since we are so far away", "key": 1},
    {"x": "Trilingual", "value": 10, "flap": "", "key": 2},
    {"x": "Really want a job", "value": 10, "flap": "It's been so long", "key": 3},
    {"x": "王者荣耀", "value": 10, "flap": "未成年系统王者荣耀打到至尊真的是尽力了(并不是未成年啊啊啊啊 ..上不去了 求带 XD", "key": 4},
    {"x": "Proudest Accomplishment", "value": 10, "flap": "", "key": 5},
    {"x": "Challengesss", "value": 10, "flap": "", "key": 6},
    {"x": "Can't Believe that", "value": 10, "flap": "I AM ALLERGIC TO VA :) the virginia state, I really have no idea", "key": 7},
    {"x": "Extremely interested in...", "value": 10, "flap": "CyberSecurity!", "key": 8},
    {"x": "Bake lover", "value": 10, "flap": "just love following the receipts", "key": 9},
    {"x": "Potential Dress DESIGNER!", "value": 10, "flap": "--img & link", "key": 10},
    
];

/*
var dataFlap = [
    ["Diving Certification", "Got Open Water Diving Certification in 2019!"],
    ["Learnt how to do a video editting in 4hrs", "I really can't think of anything to give for my dad's birthday this year lol, since we are so far away"],
    ["Really want a job", "It's been so long"],
    ["王者荣耀", "未成年系统王者荣耀打到至尊真的是尽力了(并不是未成年啊啊啊啊 ..上不去了 求带 XD"],
    ["Proudest Accomplishment", ""],
    ["Challengesss", ""],
    ["Can't Believe that", "I AM ALLERGIC TO VA :) the virginia state, I really have no idea"],
    ["Extremely interested in...", "CyberSecurity!"],
    ["Bake lover", "just love following the receipts"],
    ["Potential Dress DESIGNER!", "--img & link"],
    
];*/

anychart.onDocumentReady(function() {
    // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);
    //document.getElementById("demo").innerHTML = data[0].flap;
    // set a chart title
    chart.title('Fun Facts about me!')
    // set an array of angles at which the words will be laid out
    chart.angles([0])
    // enable a color range
    chart.colorRange(true);
    // set the color range length
    chart.colorRange().length('80%');
    // display the word cloud chart
    chart.container("container");
    chart.draw();

    var xposition = 0;
    var yposition = 0;

    chart.listen("mouseover", function(event){
        //var bodyrect = document.body.getBoundingClientRect();
    
        xposition = event.clientX;
        yposition = event.clientY;
    
        var coor = "Coordinates: (" + xposition + "," + yposition + ")";
        document.getElementById("demo").innerHTML = coor;
    
    });

    var prev="";
    var count = 0;
    var prevcount = 0;

    chart.listen("pointclick", function(event){
        count++;
        //document.getElementById("demo").innerHTML = e.point.get("key");
        //document.querySelector(".div"+e.point.get("key")).style.backgroundColor = "red";
        var x = document.querySelectorAll("#to-show");
        //if(prev === event || prev === ""){
            //alert("?");
            //x[event.point.get("key")].style.visibility = "visible";
            //x[event.point.get("key")].style.visibility = "visible";
            //x[prev.point.get("key")].style.visibility = "hidden";
        var element = x[event.point.get("key")];
        if (element.className === "hide") {
            element.className = "show";
            x[event.point.get("key")].style.left = xposition+"px";
            x[event.point.get("key")].style.top = yposition+"px";
            document.getElementsByTagName("body")[0].className = "on";
            document.getElementById("show-element").className = "active";
        } else {
            element.className = "hide";
            x[event.point.get("key")].style.left = 1+"px";
            x[event.point.get("key")].style.top = 1+"px";
            document.getElementsByTagName("body")[0].className = "off";
            document.getElementById("show-element").className = "";
        }

        //var hideMe = document.getElementById('hideMe');
        //var showelement = document.getElementById('show-element');
        document.onclick = function(e){
            alert("??");
            if(count > prevcount){
                alert("?");
                var i;
                for(i = 0; i < x.length; i++){
                    x[i].style.display=none;
                }
            }
        }
        //}else{
           // x[prev.point.get("key")].style.visibility = "hidden";
        //}
        /*
        var clickx = xposition;
        var clicky = yposition;
        x[event.point.get("key")].style.left = clickx+"px";
        x[event.point.get("key")].style.top = clicky+"px";
        */
        prev = element;
        prevcount = count;
    });     
});

window.onload = function(){
    var hideMe = document.getElementById('hideMe');
    //var showelement = document.getElementById('show-element');
    document.onclick = function(e){
       if(e.target.id !== 'hideMe'){
          hideMe.style.display = 'none';
       }
    }
 };
