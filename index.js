function smallestNumber(numberOfArray){
    let smallest = numberOfArray[0];
    for(let i=1; i<numberOfArray.length; i++){
        
        // console.log(numberOfArray[i]);
        if(numberOfArray[i] < smallest){
            smallest = numberOfArray[i];
        }
    }

    return smallest;
}

// console.log(smallestNumber([10, 20, 30, 40, 50, 60]));
// console.log(smallestNumber([100, 58, 30, 40, 50, 60]));

const names = ["Hasan", "Shuvo", "Sakib", "Tufan", "Hasan", "Shuvo", "Sakib", "Tufan", "Hasan", "Shuvo", "Sakib", "Tufan"];

function removesDuplicate(array){
    const uniqueNames = [];
    for(let i=0; i<array.length; i++){
        // console.log(array[i]);
        if(uniqueNames.indexOf(array[i]) == -1){
            uniqueNames.push(array[i]);
        }
    }

    return uniqueNames;
}

// console.log(removesDuplicate(names));

let numbers = [0, 2, 3, 4, 5, 6];
for(const number of numbers){
    // console.log(number);
}

const text = "hello world";
for(const letter of text){
    // console.log(letter);
}

let actorName = "Salman Khan";
function reversedSectence(sentence){
    let reversed = "";
    for(let i=0; i<sentence.length; i++){
        let letter = sentence[i];
        reversed = letter + reversed;
        // console.log(sentence[i]);
    }

    return reversed;
}

// console.log(reversedSectence(actorName));

function add(num1, num2){
    // console.log(num1, num2);
    return num1+num2;
}

const result = add(10 + 10, 10);
// console.log(result);


function woodCalculator(chairQty, tableQty, bedQty){
    let perchairWood = 4;
    let perbedWood = 10;
    let pertableWood = 15;

    const chairWoodQty = chairQty * perchairWood;
    const tableWoodQty = tableQty * pertableWood;
    const bedWoodQty = bedQty * perbedWood;

    return chairWoodQty + tableWoodQty + bedWoodQty;
}

// console.log(woodCalculator(5, 6, 2));

// for(i=1; i<=50; i++){
//     // console.log(i);
//     if(i%3==0 && i%5==0){
//         console.log("foobar");
//     }else if(i%3==0){
//         console.log("foo");
//     }else if(i%5==0){
//         console.log("bar");
//     }else{
//         console.log(i);
//     }
// }

const tShirts = [
    {name: "boys", price: 520, color: "black", size: "XL"},
    {name: "girls", price: 620, color: "red", size: "L"},
    {name: "men", price: 220, color: "blue", size: "M"},
    {name: "woman", price: 1020, color: "green", size: "A"},
    {name: "children", price: 120, color: "yellow", size: "M"},
]

// let cheapest = tShirts[0];
let total = 0;

for(const tShirt of tShirts){
    // console.log(tShirt.price);
    // if(cheapest.price > tShirt.price){
    //     cheapest = tShirt;
    // }
    total += tShirt.price;
}

// console.log(cheapest);
// console.log(total);

const cartItems = [
    {name: "boys", price: 520, color: "black", qty: 2},
    {name: "girls", price: 620, color: "red", qty: 3},
    {name: "men", price: 220, color: "blue", qty: 2},
    {name: "woman", price: 1020, color: "green", qty: 5},
    {name: "children", price: 120, color: "yellow", qty: 2},
]

let totalShopping = 0;

for(const item of cartItems){
    // console.log(item);
    // console.log(item.price);
    // console.log(item.qty);
    const singleItemTotalPrice = item.price * item.qty;
    totalShopping += singleItemTotalPrice;
}

console.log(totalShopping);