/*function *finction name*(input){
function logic
};*/
// function name should be express what it do
function greeting(){
    console.log("Hey man");
};
greeting();
function funcWithParameters(num1,num2,num3){
    console.log(num1*num2-num3);
};
/*we can call function more than 1time
reuseability of function mean we can change the fuction logic without editing the call of func*/
funcWithParameters(15,17,96);
funcWithParameters(2,4,16);
funcWithParameters(16,4,8);
function functionPlusThree(num1){
    return num1 + 3;
};
const answer =functionPlusThree(7);
const answer1 =functionPlusThree(2443);
console.log(answer,answer1);
/*when we need variable to use in every place in code not in func only we must define it with let\const out the func
it called global scope
if we put let\const\var in function body we cannot use it whit another process ou of function body
it called local scope
*/
// the code below express glopal scope
let var1=20;
function funcPlusTwo(){
    console.log(var1+2);
};
funcPlusTwo();
console.log(var1);
// the code below express local scope
function myTest(){
    const local="faaah";
    console.log(local);
};
myTest();
// if we do that console.log(local); it will get us error called local not defined
// if variable defined 2times with same name once global and second local both diffrent
const outerWear = "T-shirts";
function clothChange(){
    const outerWear ="jeans"
    return outerWear;
};
const returner = clothChange();
console.log(outerWear , returner);