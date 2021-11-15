// Project 04: Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11

for( let i = 1; i <= 100; i++){
      if( i % 11 == 0){
            console.log(` ${ i } this number. which is divisible by 11.`);
            break;
      }else {
            console.log(i);
      }
}