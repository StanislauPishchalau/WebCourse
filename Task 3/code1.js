var username = prompt("Please enter username", "");
debugger;
try {
    var numbers = username.match(/\d+/g).map(Number);
    username = username.toUpperCase();
}

catch (err) {
    if (err.name == 'TypeError') {


        username = username.split(""); //convert 'jQuery' to array
        username = username.reverse(); //reverse 'jQuery' order
        username = username.join(""); //then join the reverse order values together

    }


}
console.log(username);

