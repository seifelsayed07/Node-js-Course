/*1st task
ticket & invoice generator*/
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