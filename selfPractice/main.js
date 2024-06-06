let x = 5;
{
    console.log(this.x);

    let x = this.x
    console.log(x);
}

x += 1
console.log(x); // Cannot access 'x' before initialization