const arrayTest =['string','mahmoud','hamza','number',25,30,'boolean',true,false];
console.log(arrayTest);
console.log(arrayTest.length);
console.log(`--- Data Types in Arrays ---
    1- ${arrayTest[0]} like ${arrayTest[1]} or ${arrayTest[2]}
    2- ${arrayTest[3]} like ${arrayTest[4]} or ${arrayTest[5]}
    3- ${arrayTest[6]} like ${arrayTest[7]} or ${arrayTest[8]}
----------------------------`);
// nested array or 2d arrays
const arrayTest1 =[
    ["AlAhly",2],
    ["ElMasry",0]
];
console.log(`--- Results ---
${arrayTest1[0][0]} VS ${arrayTest1[1][0]}
Final Results: ${arrayTest1[0][1]} - ${arrayTest1[1][1]}
---------------`);
// Arrays element can be changed means its mutable
const arrayTest2 =[12,42,65];
console.log(arrayTest2)
arrayTest2[1]=50;
//this mean array become [12,50,65]
console.log(arrayTest2);
//we use .push() to add new element to arrays
const arrayTest3 =[
    ["seif",19],
    ["mahmoud",22]
];
console.log(arrayTest3);
arrayTest3[0].push("engineer");
arrayTest3[1].push("doctor");
arrayTest3.push(["hager",34,"vet"]);
console.log(arrayTest3);
//we use .pop() to remove from last item of array
const arrayTest4 =[
    ['ali',1],
    ['dog',2],
    ['cat',3]
];
const lastRemovedFromArrayTest4 =arrayTest4.pop();
console.log(arrayTest4);
console.log(lastRemovedFromArrayTest4);
//we use .shift() to remove from first item of array
const firstRemovedFromArrayTest4 = arrayTest4.shift();
/* we can use it without define
arrayTest4.shift(); */
console.log(arrayTest4);
console.log(firstRemovedFromArrayTest4);
//we use .unshift() to add item to first of array its opposite to .push
arrayTest4.unshift(['moatez',11]);
console.log(arrayTest4);
//we use console.table() to make array more perfect
console.table(arrayTest1);