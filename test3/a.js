let num1 =4;
let num2 =6;
let num3=8;
let large="";
let startRange= 5;
let endRange=8;

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
    large+=num1;
    if(num2>=num3){
        large+=num2;
        large+=num3;
    }
    else{
        large+=num3;
        large+=num2;
    }
}
else if(num2>=num1&&num2>=num3){
    large+=num2;
    if(num1>=num3){
        large+=num1;
        large+=num3;
    }
    else{
        large+=num3;
        large+=num1;

    }
}
else{
    large+=num3;
    if(num1>=num2){
        large+=num1;
        large+=num2;
    }
    else{
        large+=num2;
        large+=num1;
    }


}
console.log(`the sort numbers from large to small is ${large}`);

/*display numbers from 0 to 20 by for*/
console.log('numbers from 0 to 20 is ')
for(let i =0;i<20;i++)
{
    console.log(`${i} `);
}

/*display numbers from 0 to 20 by while*/
console.log('numbers from 0 to 20 is ')
let x=0;
while (x<20) {
    console.log(`${x} `);
    x++;
}

/*display all even number from 0 to 20 */
console.log('all even number from 0 to 20 is ')
for(let i =0;i<20;i++)
{
    console.log(`${i} `);
    i+=2;
}

/*display numbers between two numbers  */
let range="";
range+=startRange;
for(let i =startRange+1;i<=endRange;i++)
{
  range=range+","+i;
}
console.log(range);


/*display * by for */
for(let i=1;i<=5;i++)
{
    let star="";
    for( let y=0;y<i;y++)
    {
       star+="*";
    }
    console.log(star);
}
   

