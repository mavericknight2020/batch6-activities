// BMI formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// TEST DATA 1: John weights 86 kg and is 1.71 m tall. Victor weights 91 kg and is 1.86 m tall.
// TEST DATA 2: John weights 95 kg and is 1.94 m tall. Victor weights 83 kg and is 1.74 m tall.

/* const massJohn = 86;
const heightJohn = 1.71;
const massVictor = 91;
const heightVictor = 1.86; */

const massJohn = 95;
const heightJohn = 1.94;
const massVictor = 83;
const heightVictor = 1.74;

const BMIJohn = massJohn / heightJohn ** 2;
const BMIVictor = massVictor / (heightVictor * heightVictor);
console.log(BMIJohn, BMIVictor);

if (BMIJohn > BMIVictor) {
    console.log(`John's BMI (${BMIJohn}) is higher than Victor's (${BMIVictor})!`)
} else {
    console.log(`Victor's BMI (${BMIVictor}) is higher than John's (${BMIJohn})!`)
}



