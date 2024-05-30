let user = {
    name : "Sufyan",
    price : 200,
    message : function(){
        console.log(`${this.name} , thanks for visiting our web page`)
    } 
}
// this just work in object not in function below you can see

user.message()
user.name = "Sufi"
user.message()

console.log(this) // {}

function chai (){
    let userName = "Sufyan"
    console.log(this.userName)  // undefined
}
chai()


function chai2 (){
    console.log(this) // this will return big object it is like global this  
}
chai2()

const chai = ()=>{
   console.log(this) // this will return {} and
}

chai()