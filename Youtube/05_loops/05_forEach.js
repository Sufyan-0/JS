// for Each 

const arr = [1,2,3,4,4,5,6,7,7]

arr.forEach((item)=>{
    // console.log(item);
})

arr.forEach((item , index , arr)=>{
    console.log(item , index , arr);
})


const arrObj = [{
    name : "sufyan",
    age : 20 
},{
    name : "ahmed",
    age : 20 
},{
    name : "Raza",
    age : 20 
}]

arrObj.forEach((obj)=>{
    console.log(obj.name); // it will return names in arr obj 
})

// foreaxh kuch bhi return nhi karta hai 