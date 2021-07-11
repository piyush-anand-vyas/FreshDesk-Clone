let url = window.location.href;
let id = url.split("?")[1];
console.log(id);


document.getElementById("priority").addEventListener("select", function(){
    var x = document.getElementsByClassName("priority").selectedIndex;
    console.log(x);
    let p = document.getElementsByTagName("option")[x].value;
    console.log(p);
})





