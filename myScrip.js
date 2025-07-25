// The first JS Assignmet
// part 1: Login
let username = prompt("Enter your username (admin/user):");
let password = prompt("Enter your password:");

let role = "";
let securityLevel = "";

// check input validation
if((username === "admin" || username === "user") && password === "1234") {
    role = username;
    securityLevel = (username === "admin") ? "high" : "low"
}
else{
    alert(`Invalid username or password. Access denied.`);
    throw new Error("Login failed");
}

// Part 2: Coffee Shop Order Calculator
let customerName = prompt("What's your name? ");
let customerAge = parseInt(("How old are you? "));
let customerCoffee = prompt("What type of coffee do you want? (espresso, latte, coppuccino)").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));

let pricePerCup = 0;
 // Price Per Type of Coffee
switch(customerCoffee) {
    case "espresso":
        pricePerCup = 2.5;
        break;
    case "latte":
        pricePerCup = 3.5;
        break;
    case "cappuccino":
        pricePerCup = 4.0;
        break;
    default:
        alert(`Invalid coffee type`);
        throw new Error("Invalid coffee type");
}


let orignalTotal = pricePerCup * quantity;
let discount = 0;


if (customerAge < 18 || customerAge > 60 ) {
    discount = orignalTotal * 0.10;
}

let finalTotal = orignalTotal - discount;


// Part 3: Bill Splitter with Tip
let splitCount = parseInt(prompt("How many People are splitting the bill? (1, 2, or 3"));
let tipPercent = parseInt(prompt("What tip percentage? (0, 5, 10, or 15"));


let tipAmount = (tipPercent / 100) * finalTotal;
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / splitCount;

// Output

alert(`Hello ${customerName}!
    You ordered ${quantity} cups of ${customerCoffee}
    Original total: $${orignalTotal.toFixed(2)}
    Discount: $${discount.toFixed(2)}
    Tip: $${tipAmount.toFixed(2)}
    Total with Tip: $${totalWithTip.toFixed(2)}
    Each person pays: $${amountPerPerson.toFixed(2)}

    User Role: ${role}
    Security Level: ${securityLevel}
    `)