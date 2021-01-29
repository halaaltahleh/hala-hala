var flowertype = prompt("what type the flower do you want?");
var noflower = prompt("what many the flower do you want?");
var hala = prompt("hala");

var orderdetail;

if (noflower >= 1 && noflower <= 6) {
    orderdetail = "congrates you gained a 25% discount";
}
else if (noflower > 6 && noflower < 10) {
    orderdetail = "congrates you gained a 50% discount";
}
else if (noflower > 10) {
    orderdetail = "congrates you gained a 50% and two flowers free";
}
else {
    orderdetail = "sorry your input error";
}

document.write(orderdetail)
alert("thank you");
confirm("are you happy in this discount?");


var AGE = prompt("whats your age?");


var result;
if (AGE = 24) {
    result = "thank you hala";
}
else if (AGE >= 45) {
    result = "my age 24 years";
}
else {
    result = "goodby";
}


document.write(result)
alert("thank you")
confirm("hallosh")