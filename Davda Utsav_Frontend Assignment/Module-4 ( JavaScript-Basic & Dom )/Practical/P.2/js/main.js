// create a function for two value addition
function plus() {
    var n1 = parseInt(document.getElementById("display-1").value);
    var n2 = parseInt(document.getElementById("display-2").value);
    var n3 = n1 + n2;
    document.getElementById("ans").innerHTML = "Addition is: " + n3;
}

// create a function for two value subtraction
function minus() {
    var n1 = parseInt(document.getElementById("display-1").value);
    var n2 = parseInt(document.getElementById("display-2").value);
    var n3 = n1 - n2;
    document.getElementById("ans").innerHTML = "Subtraction is: " + n3;
}

// create a function for two value multiplication
function mul() {
    var n1 = parseInt(document.getElementById("display-1").value);
    var n2 = parseInt(document.getElementById("display-2").value);
    var n3 = n1 * n2;
    document.getElementById("ans").innerHTML = "Multiplication is: " + n3;
}

// create a function for two value division
function div() {
    var n1 = parseInt(document.getElementById("display-1").value);
    var n2 = parseInt(document.getElementById("display-2").value);
    var n3 = n1 / n2;
    document.getElementById("ans").innerHTML = "Division is: " + n3;
}

// create a function for two value percentage
function per() {
    var n1 = parseInt(document.getElementById("display-1").value);
    var n2 = parseInt(document.getElementById("display-2").value);
    var n3 = n1 % n2;
    document.getElementById("ans").innerHTML = "Percentage is: " + n3;
}