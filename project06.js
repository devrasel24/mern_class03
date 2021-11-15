// Project 06: Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operator twice. 


// increment Operator

for( let i = 10000; i <= 10050; i++){
     console.log(i);
}

console.log(`

Break

// `);

// discrement Opearator

for (let r = 10050; r > 10000; r--){
        console.log(r);
}



console.log(`


        Alternative way

`);

// Alternative

for( let p = 10000; p <= 10050; p++){
        console.log(p);

        if( p == 10050){
                for(let p = 10050; p >= 10000; p--){
                        console.log(p);
                }
        }
}

