// for loop counting from 0 to 10

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}


// nested loop 

for (let i = 0 ; i <= 10 ; i++){
    console.log(`Outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        const element = j;
        console.log(`Inner loop ${element}`);
    }
}

// table 1 to 10

for (let i = 1 ; i <= 10 ; i++){
    console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}