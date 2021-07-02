const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Seline";
const totalAmount = 130;

if (age == 18) {
    console.log("Je bent oud genoeg, je mag naar binnen!");
} else {
    console.log("Je bent te jong, je mag niet naar binnen!");
}

if (isFemale == true) {
    console.log("Je bent een vrouw en mag naar binnen.");
} else {
    console.log("Je bent geen vrouw en mag niet naar binnen.");
}

if (driverStatus == "bob") {
    console.log("Je bent bob en mag naar huis toe rijden.");
} else {
    console.log("Je bent geen bob en moet een taxi bellen.");
}   

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Je moet de volle mep betalen.");
}

if (firstName === "Sarah" || firstName === "Bram") {
    console.log("Je krijgt een gratis biertje!");
} else {
    console.log("Je krijgt geen gratis biertje.");
}

if (totalAmount >= 25 && totalAmount <= 50) {
    console.log("Je krijgt een gratis portie bitterballen!");
} else if (totalAmount >= 50 && totalAmount <= 100) {
    console.log("Je krijgt een gratis portie nachos.");
} else if (totalAmount >= 100) {
    console.log("Je krijgt een gratis flesje champagne!");
} else {
    console.log("Je krijgt geen cadeautje.");
}