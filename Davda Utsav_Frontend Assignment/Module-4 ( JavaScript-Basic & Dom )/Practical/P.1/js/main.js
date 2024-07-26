function display() {
    var x = document.getElementById("dis");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}