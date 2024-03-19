// 1. Declare 3 variables in one statement. 
let name,age,qualification;

// 2. Declare 5 legal & 5 illegal variable names.
// legal=>
   let name1 = "name"
    let $data = 89
    let _underScore = "underscrore";
    let MYNAME = "my name"
    let _________userName = "username "

    // illegal=>
    // let function = ""
    // let &number = "number"
    // let 5number = "number"
    // let my-name = 'my name'
    // let #user = "usre"
    // let @jw = "check"


//  3. Display this in your browser a)
//   A heading stating "Rules for naming JS variables" q
document.querySelector("#main").innerHTML = "Rules for naming JS variables"
//   b) Variable names can only contain and For example $my_1stVariable 
document.querySelector("#main1").innerHTML = "Variable names can only contain Numbers, $ , Underscore(_) For example $my_1stVariable "
//   c) Variables must begin with a mputing For example $name, _name or name 
document.querySelector("#main2").innerHTML = "Variables must begin with a letter or $ For example $name, _name or name "
//   d) Variable names are case 
document.querySelector("#main3").innerHTML = 'Variable names are case sensative '
//   e) Variable names should not be JS
document.querySelector("#main4").innerHTML = "Variable names should not be JS Keyword "
