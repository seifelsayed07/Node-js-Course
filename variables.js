let c = 5;
let a;
let b;
console.log(a);
console.log(b);
console.log(c);
a=c;
b=a+c;
console.log(a+b+c);
const quotient = 18/4;
console.log(quotient);
let myVar = 92;
myVar++;
console.log(myVar);
myVar--;
myVar--;
myVar--;
console.log(myVar);
const quotient2 = 2.0/2.0;
console.log(quotient2);
const var1 = 25/2;
console.log(var1);
const var2 = 25%2;
console.log(var2);
let x = 27;
let y = 153;
let z = 1234;
x+= 13;
y-= 23;
z*= 2;
let d = 32;
d/= 4;
console.log(x);
console.log(y);
console.log(z);
console.log(d);
// ++ mean +1 -- mean -1
/*new mulit line
commnt*/
const myStr = "I am a \"double qouted \"string inside \"douple quotes\"";
console.log(myStr);
const myStr2 = 'seif said , "Let\'s learn javascript" ahmed responded ,"that\'s good idea"';
// we use backslash to escape ' in 'text had " is = \'s"'
console.log(myStr2);
/* \' , \" , \\
\n mean new line 
\t mean tap
\r mean carriage return
\b mean word boundry 
\f mean form feed */
const myStr3 = 'FirstLine \n\tSecondLine \nThirdLine';
console.log(myStr3);
const myStr4 = "FirstWord " + "SecondWord";
console.log(myStr4);
// += can be used to string to other
let myStr5 = "hello, ";
myStr5 += "how are you";
console.log(myStr5);
// 12 40
console.log("seif said : " + myStr5);
let myStr6 = " good job";
myStr5 += myStr6;
console.log(myStr5);
console.log("my name".length);
let ab = "alslam3likom";
console.log(ab);
console.log(ab[0]);
// ab[0] = x  we cannot change char of string by using array string is immutable : part of string cannot be edited
console.log(ab);
const myName = "seifelsayed";
console.log(myName[myName.length - 1]);
const lastIndex = myName.length - 1;
console.log(myName[lastIndex]);
console.log(myName[myName.length - 2]);
console.log(myName[myName.length - 3]);
console.log(myName[myName.length - 4]);
let adjective ="big";
let animalName ='dog';
let verb ='ran';
let adverb = 'quickly';
console.log("A"+" "+adjective+" "+animalName+" "+verb+" "+adverb); // 83 line equal that line
console.log("mohamed");
console.log(`A ${adjective} ${animalName} ${verb} ${adverb}`);
let u = 5;
u*= 2 + 3; // this mean u = u * (2+3)
console.log(u)
let result = '10'; // this is string not number
result += 5;
let result1 = 10; // this is number
result1 += 5;
console.log(result);
console.log(result1);