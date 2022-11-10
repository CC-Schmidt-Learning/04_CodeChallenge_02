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

let ageMilk, ageSaft, ageCola, ageWein;
 ageMilk=(personAge <6 && personAge >=0);
 ageSaft=(personAge <13 && personAge >=6);
 ageCola=(personAge <18 && personAge >=13);
 ageWein=(personAge >=18);

// das Alter steht in Verbindung mit dem Getränk //
switch (true) {
    case ageMilk: 
        console.log(personName + " ist " + personAge +"Jahre alt und trinkt Milch");
        break;
    case ageSaft: 
        console.log(personName + " ist " + personAge +"Jahre alt und trinkt Saft");
        break; 
    case ageCola: 
        console.log(personName + " ist " + personAge +"Jahre alt und trinkt Cola");
        break;
    case ageWein: 
        console.log(personName + " ist " + personAge +"Jahre alt und trinkt Wein");
        break;
    default:
        break;
}