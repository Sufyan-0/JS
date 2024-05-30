let user = {
    name : "Sufyan",
    price : 200,
    message : function(){
        console.log(`${this.name} , thanks for visiting our web page`)
    } 
}

user.message()
user.name = "Sufi"
user.message()

console.log(this) // {}