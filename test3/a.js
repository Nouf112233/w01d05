let num1 =4;
let num2 =6;
let num3=8;
let large=[];

/*large number*/
if(num1>num2){
    console.log(`${num1} larger than ${num2}`);

}
else if(num2>num1){
    console.log(`${num1} larger than ${num2}`);
}
else{
    console.log(`${num2} & ${num1} is equal`);
}


/*even or odd*/
if(num1%2===0){
    console.log(`${num1} is even`)
}
else{
    console.log(`${num1} is odd`)
}

/*sort from large to small*/
if(num1>=num2&&num1>=num3){
    large.push(num1);
    if(num2>=num3){
        large.push(num2);
        large.push(num3)
    }
    else{
        large.push(num3);
        large.push(num2)
    }
}
else if(num2>=num1&&num2>=num3){
    large.push(num2);
    if(num1>=num3){
        large.push(num1);
        large.push(num3)
    }
    else{
        large.push(num3);
        large.push(num1)

    }
}
else{
    large.push(num3);
    if(num1>=num2){
        large.push(num1);
        large.push(num2)
    }
    else{
        large.push(num2);
        large.push(num1)
    }


}
console.log(`the sort numbers from large to small is ${large}`);
