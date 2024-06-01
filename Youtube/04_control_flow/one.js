// if

const isUserLoggedIn = true;
if (isUserLoggedIn === true) {
    console.log(`User is LoggedIN`);
    printed;
}
console.log("user is not logged in "); // printed it will print always

// it is the right way
// const isUserLoggedIn = false
if (isUserLoggedIn === true) {
    console.log(`User is LoggedIN`); //printed
} else {
    console.log(`user is not Logged in`);
}

const score = 200;
if (score > 100) {
    let power = "fly";

    console.log(`User Power : ${power}`);
} else {
    console.log(power); // power is not define
}

console.log(`user power : ${power}`); //power is not define

const balance = 1000;
if (balance > 2000)
    console.log(`you balance is lower then 2000`), console.log("reddsds"); //not recommended and not readable

const paisy = 1000;

if (paisy < 500) {
    console.log("paisy is less then 500");
} else if (paisy < 750) {
    console.log(`paisy is less then 750`);
} else if (paisy < 900) {
    console.log(`paisy is less then 900`);
} else {
    console.log(`paisy is lower then 1200`);
}
