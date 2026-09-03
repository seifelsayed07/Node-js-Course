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