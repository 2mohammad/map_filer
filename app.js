console.log('doubleValues');
console.log('5,1,2,3,10');
function doubleValues(array){
    return array.map(function(element){
       return element * 2;
    });
}
console.log(doubleValues([5,1,2,3,10]));


console.log('\n'+'onlyEvenValues');
console.log('1,2,3,4,5,6,7');
function onlyEvenValues(array){
    return array.filter(function(element){
        return element % 2 === 0;
    });
}
console.log(onlyEvenValues([1,2,3,4,5,6,7]));


console.log('\n'+'showFirstAndlast'+'\n'+'colt','matt', 'tim', 'test');
function showFirstAndlast(array){
    return array.map(function(element){
        return element[0]+element[element.length-1];
    });
}

console.log(showFirstAndlast(['colt','matt', 'tim', 'test']));

console.log('/n' +'addKeyAndValue');


function addKeyAndValue(array, key, value){
    for (let element of array){
        Object.assign(element, {[key]: value});
    }
    return array;
}

console.log(addKeyAndValue(
    [
        {name: 'Elie'},
        {name: 'Tim'},
        {name: 'Matt'},
        {name: 'Colt'}
      ],
      'title',
      'instructor'
    ));

//vowelCount
function vowelCount(string){
    const words = string.toLowerCase();
    const vowels = 'iaeou';
    const vowelObject = {};
    for (let vowel of vowels){
        let count = 0;
        for (let letter of words){
            if (vowel === letter){
                count++;
            }
        }
        if (count > 0){
            Object.assign(vowelObject, {[vowel]: count});
        }
    }
    return vowelObject;
}

console.log(vowelCount('Elie'));
console.log(vowelCount('I Am awesome and so are you'));

//doubleValuesWithMap
function doubleValuesWithMap(array){
    return array.map(function(element){
        return element * 2;
    });
}

console.log(doubleValuesWithMap([1,2,3]));
console.log(doubleValuesWithMap([1,-2,-3]));

//extractKey

function extractKey(array, key){
    const keyList = [];
    const valueList = [];
    const list = [];
    for (let element of array){
        keyList.push(Object.keys(element));
        valueList.push(Object.values(element));
    }
    for (let i = 0; i < keyList.length; i++){
        for (let q = 0; q < keyList[i].length; q++) {
            if (keyList[i][q] === key){
                list.push(valueList[i][q]);
            }
        }
    }
    return list;
}

console.log(extractKey(
    [
      {pop: 'dadda', name: 'Elie'},
      {name: 'Tim', pop: 'hghj', piop: ''},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  ));

//extractFullName

function extractFullName(array){
    return array.map(function (element){
        return Object.values(element).toString().replace(/,/g ," ");
    });
}
console.log(extractFullName([
    {first: 'Elie', middle: 'R', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ]));

  //filterByValue

  function filterByValue(array, key){
    return array.filter(function(element){
        const keys = Object.keys(element);
        const values = Object.values(element);
        for( let subElement = 0;  subElement < keys.length; subElement++){
            if (keys[subElement] === key && values[subElement] === true){
                return element;
            }
        }
    });
  }

  console.log(filterByValue(
    [
      {first: 'Elie', last:"Schoppik", isOwner: false},
      {first: 'Tim', last:"Garcia", isCatOwner: false},
      {first: 'Matt', last:"Lane", isCatOwner: true},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner'
    )); 
    
    //find
    function find(array, value){
        const searchValue = array.filter(function(element){
            if(element === value){
                return element;
            } 
        }).toString();
        if (searchValue === ''){
            return (typeof(undefined));
        }
        else {
            return searchValue;
        }
    }
    console.log(find([1,2,3,4,5], 2));

//findInObj
    function findInObj(array, key, value){
        const valuesFound =  array.filter(function(element){
            const keys = Object.keys(element);
            const values = Object.values(element);
            if (key !== ''){
                for(let subElement = 0;  subElement < keys.length; subElement++){
                    if (keys[subElement] === key && values[subElement] === value){
                        key = '';
                        return element;
                }}}});
        return valuesFound;
      }
      console.log(findInObj(
        [
          {first: 'Elie', last:"Schoppik"},
          {first: 'Tim', last:"Garcia", isCatOwner: true},
          {first: 'att', last:"Lane"},
          {first: 'Colt', last:"Steele", isCatOwner: true}
        ],
        'isCatOwner',
        true
      ));

//removeVowels
function removeVowels(string){
    const vowels = 'aeiou';
    const array = [];
    for (let letter of string){
        array.push(letter.toLowerCase());
    }
    return array.filter(function(element){
        const letterCheck = [];
        for (let vowel of vowels){
            if (element !== vowel){
                letterCheck.push('');
            }
        }        
        if (letterCheck.length === vowels.length){
            return element;
        }
    }).toString().replace(/,/g,'');
}

console.log(removeVowels('ZZZZTIMZZZ'));

//doubleOddNumbers
function doubleOddNumbers(array){
    const odds = array.filter(function (element){
        if (element % 2 !== 0){
            return element;
        }
    });
    return odds.map(function(element){
        return element * 2;
    });
}
console.log(doubleOddNumbers([1,2,3,4,5]));
console.log(doubleOddNumbers([4,4,4,4,4]));