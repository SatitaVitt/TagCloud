function hideit(target, index){
    var divID = document.getElementsByClassName(target);
    divID[index].id = "hide";
    divID[index].style.left = 1+"px";
    divID[index].style.top = 1+"px";
}
/*
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
    
];*/

var data = [
    {"x": "Diving Certification", "value": 10, "key": 0},
    {"x": "Learnt video editting in 4hrs", "value": 10, "key": 1},
    {"x": "Trilingual", "value": 10, "flap": "", "key": 2},
    {"x": "Really want a job", "value": 10, "key": 3},
    {"x": "王者荣耀", "value": 10, "key": 4},
    {"x": "Proudest Accomplishment", "value": 10, "key": 5},
    {"x": "Challengesss", "value": 10, "key": 6},
    {"x": "Can't Believe that", "value": 10, "key": 7},
    {"x": "Extremely interested in...", "value": 10, "key": 8},
    {"x": "Bake lover", "value": 10, "key": 9},
    {"x": "Potential Dress DESIGNER!", "value": 10, "key": 10},
    
];

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

    chart.listen("pointclick", function(event){
        var x = document.querySelectorAll(".to-show");
       
        var element = x[event.point.get("key")];
        //alert(element.id);
        if (element.id === "hide") {
            element.id = "show";
            
            if(event.point.get("key") != '5'){
                //alert("?");
                //var width = Math.max(document.documentElement.clientWidth, window.innerWidth);
                //var height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                //alert("width; "+ width + " hight: "+ height);
                //x[event.point.get("key")].style.right = (width) + "px";
                
                //x[event.point.get("key")].style.top = (height/2) + "px";
            
                x[event.point.get("key")].style.left = (xposition+100)+"px";
                x[event.point.get("key")].style.top = (yposition+100)+"px";
                
            }
            x[event.point.get("key")].style.zIndex = "10";
            
            //document.getElementsByTagName("body")[0].className = "on";
            //document.getElementById("show-element").className = "active";
            
        } else {
            element.id = "hide";
            x[event.point.get("key")].style.zIndex = "-10";
            
            //document.getElementsByTagName("body")[0].className = "off";
            //document.getElementById("show-element").className = "";
        }

       
    });     
});
