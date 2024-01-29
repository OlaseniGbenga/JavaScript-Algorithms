var numbers = new Array(1,2,"boy");
var me = "us";

for(var i = 3; i< 15; i++) {
    numbers[i] = i;
}


// split string metthod
// var word = "mweet";
// var letter = word.split("",3);

// for ( var i =0; i < letter.length; i++){
//     console.log("this is " + letter[i]);
// }


//Array aggregrate

// var num = []

// for (var i = 0; i < 15; i++){
//     num[i]= i;
// }
// console.log(num);

// var samenun = num;

// console.log(samenun);

// num[0] = 400;

// console.log(samenun);



//deep copy
// var num = [];
//  for ( let i= 0; i<15; i++){
//     num[i] = i;
//  }


//  function copy( arr1, arr2){
//     for (let i =0; i< arr1.length; i++){
//         arr2[i] = arr1[i];
//     }
//  }

//  var samenum = [];

//  copy(num, samenum);
//  console.log(num, samenum)
//  num[0] = 400;
//  console.log(samenum[0])

//accessor functions
// var names =["gbenga", "Joel", "olaseni"];
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// var me = [];
// rl.question('Enter something: ', (userInput) => {
   
// var position =names.indexOf(userInput);

// if (position >=0 ){
//     console.log(`your name ${userInput} was found at position ${position+1}`)
// } else {
//     console.log(`Your name ${userInput}, was not found in the list`)
// }
//   rl.close();
// });

const array = [1, 2, 3, 4 ,[1, 2, 3, 4]];
console.log(array.toString()) ;

