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

let personAge, personName, personDrink;

personName=prompt("insert your name here");
personAge=Number(prompt("Insert your age here"));
personDrink="Milk";
personDrink="Saft";
personDrink="Cola";
personDrink="Wein";

let ageDrink;
ageDrink=(0 < personDrink < 6 ); //Alter 0 > And age < 6 
//ageDrink="Saft"; //Alter 6 bis 12 
//ageDrink="Cola"; //Alter 13 bis 17
//ageDrink="Wein"; //18 + 

switch (personAge) {
    case (ageDrink):
        console.log (personName + " ist " + personAge + "Jahre alt und trinkt" + ageDrink);
        break;
    default:
        break;
}
