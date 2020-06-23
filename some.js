const words = ['adaaddad', 'adassssssssdadaddada', 'ffaadadadajsa', 'faaffafafssasa'];

words.some((val) =>{
    return val.length > 10;
});

console.log(words);

function mySome(array, func){
    for (let elements of array){
        if (func(elements) === true){
            return true;
        } 
    }
    return false;
}

console.log(mySome(words, function(elements){
    return elements.length > 50;
}));

console.log(mySome([4,5,6,7], function(elements){
    return elements === 7;
}));

function myEvery(array, func){
    const truthArray = [];
    for (let elements of array){
        if (func(elements) === true){
            truthArray.push(true);
        }
    }
    if (truthArray.length === array.length){
        return true;
    }
    else {
        return false;
    }
}

function myEveryMod(array, func){
    for (let elements of array){
        if (func(elements) === false){
            return false;
        } 
    }
    return true;
}

console.log(myEvery(words, function(elements){
    return elements.length > 7;
}));

console.log(myEveryMod(words, function(elements){
    return elements.length > 7;
}));

//hasOddNumber
function hasOddNumber(array){
    return array.some(function (element){
        if (element % 2 > 0) return true;
        else {
            return false;
        }
    });
}
console.log('hasOddNumber:: Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.');
console.log('hasOddNumber([1,2,2,2,2,2,4])');
console.log(hasOddNumber([1,2,2,2,2,2,4]));
console.log('hasOddNumber([2,2,2,2,2,4])');
console.log(hasOddNumber([2,2,2,2,2,4]));

//hasZero
function hasAZero(number){
    const array = number.toString().split('');

    return array.some(function (element){
        if (element === '0') return true;
        else {
            return false;
        }
    });
}
console.log('\n\n'+'hasAZero:: Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false');
console.log('hasAZero(33321232131012)');
console.log(hasAZero(33321232131012));
console.log('hasAZero(1212121)');
console.log(hasAZero(1212121));

//hasOnlyOddNumbers
function hasOnlyOddNumbers(array){
    return array.every(function (element){
        if (element % 2 === 0) {
            return false;
        }
        else {
            return true;
        }
    });
}

console.log(hasOnlyOddNumbers([1,3,5,7]));
console.log(hasOnlyOddNumbers([1,2,3,5,7]));

//hasNoDuplicates
function hasNoDuplicates(array){
    const arrayCompare = array;
    return array.every(function (){
        for (let element = 0; element < array.length; element++){
            for (let subElement = 0; subElement < array.length; subElement++){
                if (arrayCompare[subElement] === array[element] && element !== subElement){
                    return false;
                }
            }
        }
        return true;
    });
}
 console.log(hasNoDuplicates([1,2,3]));
 console.log(hasNoDuplicates([1,2,3,1]));

 //hasCertainKey
 let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  //hasCertainKey
 function hasCertainKey(array, key){
    return array.every(function (element){
        const keysArray = Object.keys(element);
        for (let element of keysArray){
            if(element === key){
                return true;
            }
        }
        return false;
    });
 }
 console.log(hasCertainKey(arr,'first'));
 console.log(hasCertainKey(arr,'isCatOwner'));

 //hasCertainValue
 function hasCertainValue(array, key, value){
    return array.every(function(element){
        const keysArray = Object.keys(element);
        const valuesArray = Object.values(element);
        for(let i = 0; i < array.length; i++){
            if (keysArray[i] === key && valuesArray[i] === value){
                return true;
            }
        }
        return false;
    });
 }
console.log(hasCertainValue(arr,'title','Instructor'));
console.log(hasCertainValue(arr,'first','Elie'));