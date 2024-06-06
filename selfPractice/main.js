let x = 5;
{
    let y = x
}

x += 1
console.log(x); // now this is working well

// if outer variable and inner varaibale name is same so it will give this error Cannot access 'x' before initialization