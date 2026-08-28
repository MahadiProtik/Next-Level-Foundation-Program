// We will build order processing system how to understand dry and how important a function is

function isValidPrice(price){
    return typeof price === "number" && price>0;
}

function isValidEmail(email){
    return email.includes("@") && email.includes(".");
}

function calculateDiscount(price, discountPercent){
    if(!isValidPrice(price)){
        return 0;
    }
    let discountAmount = (price * discountPercent)/100;
    return price - discountAmount;
}

function calculateFinalBill(price, vatPercentage = 15){
    let vat = (price* vatPercentage)/100;
    return price + vat
}

function formatBDT(amount){
    return `${amount.toFixed(2)} BDT`;
}

function capitalized(str){
    if(!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function processOrder(user, itemPrice, discountCode){
    console.log(`---Processiing order for ${capitalized(user.name)} ---`);
    if(!isValidEmail(user.email)){
        console.log("Error! invalid user email");
        return;
        
    }
    let currentPrice = itemPrice;
    if(discountCode == "NLB"){
        currentPrice = calculateDiscount(itemPrice, 20);
        console.log("20% Discount Applied");
        
    }
    let totalBill = calculateFinalBill(currentPrice);

    console.log("Final amount to pay: ", formatBDT(totalBill));
    console.log("Order completed Successfully");
    
}


let user1 = {name: "Mahadi Hashan", email: "mahadi333h@gmail.com"};

processOrder(user1, 2000, "NLB");



