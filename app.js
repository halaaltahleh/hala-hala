var flowertype = prompt("what type the flower do you want?");
var noflower = prompt("what many the flower do you want?");

var orderdetail;
if (noflower >= 1 && noflower < 6) {
    ordertdetail = "congrates you gained a 25% discount";
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

document.write(orderdetails)
alert("thank you");
confirm("are you happy in this discount?");
