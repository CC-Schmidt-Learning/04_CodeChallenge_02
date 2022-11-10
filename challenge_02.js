/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let personAge, personName;

personName=prompt("insert your name here");
personAge=Number(prompt("Insert your age here"));

let ageDrink;
ageDrink="Milch"; //Alter 0 > And age < 6 
ageDrink="Saft"; //Alter 6 bis 12 
ageDrink="Cola"; //Alter 13 bis 17
ageDrink="Wein"; //18 + 

switch (ageDrink) {
    case "Milch":
        console.log (personName + "ist " + personAge + "Jahre alt und trinkt Milch");
        break;

    default:
        break;
}
