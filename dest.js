const teaOrder = {
    variety: 'oolong',
    teaName: 'water sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3,
    brewTemp: 180
};

const { price, quantity, teaName, ...others } = teaOrder;
console.log(others);

const {brewTemp = 175} = teaOrder;
console.log(brewTemp);

const { teaName: tea = 'blanky'} = teaOrder;
console.log(tea);

function checkout(tea) {
    const { quantity = 1, price } = tea;
    return quantity * price;
}

console.log(checkout(teaOrder));

const students = [
    {name: 'Drake', gpa: 3.0},
    {name: 'Bobs', gpa: 2.5}
];

const [topStudent, secondBest] = students;
console.log(topStudent, secondBest);

// const [first, ...losers] = students;
// console.log(losers);

function getTotal({quantity, price}){
    return quantity * price;
}

console.log(getTotal(teaOrder));

const longJump = ['Tammy', 'Jessica', 'Violet'];
const swimResults = ['China', 'Japan', 'Russia'];
function awardMedals([gold, silver, bronze]){
    return {
        gold, silver, bronze
    };
}

console.log(awardMedals(longJump));
console.log(awardMedals(swimResults));

let del = 'Mayo';
let crud = 'whipd crem';

[del, crud] = [crud, del];

console.log(del);

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {key: 1846, key: 1659}

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"}))
   // sentence with name and purple
  console.log(getUserData({firstName: "Melissa"}))
  // sentence with name and green
  console.log(getUserData({})) // sentence with undefined and green
  
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); //     "Raindrops on roses",
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles",
 // "warm woolen mittens",
 // "Brown paper packages tied up with strings"]

 let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {numbers: {a}} = obj;
const {numbers: {b}} = obj;
console.log(a);
console.log(b);

const arise = ['first','second']

// function mixer (array){
//     return [array[0], array[1]] = [array[1], array[0]];
// }
//console.log(mixer(arise));

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));
