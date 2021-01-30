var order = prompt("what do you want turkish or mocca?");
var nocups = prompt("what many cups do you want?");

while (order !== "turkish" && order !== "mocca") {
    order = promot("what do you want turkish or mocca?")
}
alert("ok");

var picture = "";
if (order === "turkish") {
    picture = `<img src="images/book.png" />`;
}
else if (order === "mocca") {
    picture = `<img src="images/newspaper.jpeg" />`;
}

var result = "";
for (i = 0; i < nocups; i++) {
    result = result + picture;
}

document.write(result);


















var username = prompt("whats your name?");





var age = prompt("how old are you?");
var nocups = prompt("what many of acups do you want?");

var result = "";
if (username == "hala") {
    result = "my name is hala";
}
else if (username == "haya") {
    result = "my name is haya";
}
else {
    result = "my name is hannn";
}
var equal = "";
if (age == 24) {
    equal = "im 24 years";
}
else {
    equal = "error";
}
var order = "";
if (nocups > 4 && nocups < 6) {
    order = "this order between 4 and 6";
}
else {
    order = "error";
}

document.write(result);
document.write(equal);
document.write(order);
alert("thank you");
confirm("are you interested with me?");
