/*1st task
Ticket & Invoice Generator*/
const clientName = "seif elsayed";
const unitPrice = 150;
const quantity = 3;
const discountRate = 20; // 20%
let firstChar = clientName[0];
let lastChar = clientName[clientName.length - 1];
let beforeLastChar = clientName[clientName.length -2];
let nameLength = clientName.length;
let clientCode = firstChar+lastChar+beforeLastChar+nameLength;
let totalBeforeDiscount = unitPrice*quantity;
let discountValue = (totalBeforeDiscount*discountRate)/100;
let finalPrice = totalBeforeDiscount - discountValue;
console.log(`--- Ticket Invoice ---
Client Code: ${clientCode}
Total Before Discount: ${totalBeforeDiscount} EGP
Discount (20%): ${discountValue} EGP
Final Amount: ${finalPrice} EGP
-----------------------`)
/*2nd task
Shopping Cart Challenge*/
const customerName = "seif elsayed";
const accountBalance = 5000;
const shoppingCart = ["Keyboard","Mouse","Headset"];
const customerRecord =[
    customerName,
    accountBalance,
    shoppingCart
];
customerRecord[2].push("Monitor");
let canceledItem = customerRecord[2].shift();
let itemsCount = customerRecord[2].length;
console.log(`customer Name: ${customerRecord[0]}
Balance: ${customerRecord[1]} EGP
Canceled Item: ${canceledItem}
Remainig Items In Cart: ${itemsCount}
`);
/*test task
Order Processor Challenge*/
function processOrder(product,price,quantity,taxRate){
const totalBeforeTax = price*quantity;
const taxValue = totalBeforeTax*taxRate/100;
const totalAfterTax = totalBeforeTax + taxValue;
return `Order: ${quantity}x ${product} | Final Total: ${totalAfterTax} EGP`;
};
const order1 = processOrder("Monitor",2000,2,10);
const order2 = processOrder("Headset",500,1,14);
console.log(order1);
console.log(order2);
/*3rd task
Employee Access System*/
function checkAccess(employeeName, age, role){
 if(age < 18){
    return `Access Denied: ${employeeName} is underage.`;
 }
 else if (role === "Admin") {
    return `Welcome ${employeeName}! You have Full Admin Access.`;
 }
 else {
    return `Welcome ${employeeName}! You have Standard Access.`
 }
}
const emp1 = checkAccess("seif" , 19 , "User");
const emp2 = checkAccess("Ahmed" , 16 , "User");
const emp3 = checkAccess("Mahmoud" , 30 , "Admin");
console.log(emp1);
console.log(emp2);
console.log(emp3);