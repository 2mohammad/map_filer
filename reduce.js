const nums = [ 10, 20, 30, 50, -5, -6, 100 ];
const bums = [ 10, 20, -90, 50, -5, -6, 100 ];

const min = nums.reduce(function(accumulator, nextValue){
    if(nextValue < accumulator){
        accumulator = nextValue;
    };
    return accumulator;
}, -8);

const minFinal = bums.reduce(function(accumulator, nextValue){
    if(nextValue < accumulator){
        accumulator = nextValue;
    };
    return accumulator;
}, min);

console.log(minFinal);

//extractValue
function extractValue(array, key){

    const arrays = [];
    arrays.push(array.reduce(function(accumulator, nextValue){
        const keys = Object.keys(nextValue).toString();
        const values = Object.values(nextValue).toString();
        if (keys === key){
            arrays.push(values);
            return nextValue;
        }
    }, array[0]));
    return arrays.splice(0, arrays.length - 1);
}
const arrt = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, {name: 'Cssolt'}, {name: 'Coltas'}];
console.log(extractValue(arrt,'name'));

//vowelCount
function vowelCount(string){
    const vowels = 'aeiou'.split('');
    const strings = string.toLowerCase();
    objected = {};
    vowels.reduce(function(accumulator, nextValue){
       if (strings.split(nextValue).length > 1){
        Object.assign(objected, {[nextValue]: strings.split(nextValue).length-1});
    }
    return nextValue;
    }, strings[0]);
    return objected;
}
console.log(vowelCount('I Am awesome and so are you')); // {e:2,i:1};
console.log(vowelCount('A'));

//addKeyAndValue
function addKeyAndValue(array, key, value){
    const arra = [];
    array.reduce(function(accumulator, nextValue){
        const val = Object.values(nextValue).toString();
        const kei = Object.keys(nextValue).toString();
        const obj = {[kei]: [val]};
        const obj2 = {[key]: [value]};
        arra.push(Object.assign(nextValue, obj2, obj));
        return nextValue;
    }, array[0]);
    return arra;
}
const arrats = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(addKeyAndValue(arrats, 'title', 'Instructor'));

//partition
function partition(array, func){
    let arra = [];
    const array1 = [];
    const array2 = [];
    array.reduce(function(accumulator, nextValue){

        if (func(nextValue) === true){
            array1.push(nextValue);
        }
        else{
            array2.push(nextValue);
        }
        return nextValue;
    }, array[0]);
    arra.push(array1);
    arra.push(array2);
    return arra;
}

function isEven(val){
    return val % 2 === 0;
}
const arri = [1,2,3,4,5,6,7,8];
console.log(partition(arri, isEven));

const names = ['Elie', 'Colt', 'Tim', 'Matt'];
function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }
  console.log(partition(names, isLongerThanThreeCharacters));