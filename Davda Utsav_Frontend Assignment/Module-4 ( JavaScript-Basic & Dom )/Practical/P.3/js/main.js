function result() {
    var c=parseInt(document.getElementById("c").value);
    var c1=parseInt(document.getElementById("c++").value);
    var d=parseInt(document.getElementById("d").value);
    var h=parseInt(document.getElementById("h").value);
    var cs=parseInt(document.getElementById("cs").value);
    var p=parseInt(document.getElementById("p").value);
    var j=parseInt(document.getElementById("j").value);

    var res=c+c1+d+h+cs+p+j;
    var fn=res*(100/700);
    document.getElementById("mark").innerHTML = "<b> Total mark is: <b>" + res + "/700";
    document.getElementById("per").innerHTML = "<b> Percentage is: <b>" + Math.round(fn) + "%";

    document.getElementById("mark").style="border:1px solid; padding: 5px; width: 50%;";
    document.getElementById("per").style="border:1px solid; padding: 5px; width: 50%;";
}