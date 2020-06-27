function sum(...nums){
    let idiot = 0;
    if (nums.length === 0){
        return typeof(undefined);
    }
    else{
    return nums.reduce((sum, indValue) => {
        return idiot = idiot + indValue;
    }, nums[0]);
}}

class MakeFamily {
    constructor(mom, dad, ...kids){
        this.mom = mom;
        this.dad = dad;
        this.kids = kids;
        this.familyName = '';
    }
}

const famalies = [];
function makeFamily(mom, dad, ...kids) {
    
    const family = new MakeFamily();
    family.familyName = [`The ${mom} family`];
    family.mom = mom;
    family.dad = dad;
    family.kids = kids;
    return famalies.push(family);
}

console.log(makeFamily('Bob', 'Juli', 'Arthur', 'Bobby'));
console.log(makeFamily('Nobel', 'Rexi', 'Rumplekins'));
console.log(famalies);

const filterByType = (type, ...vals) => {
    return vals.filter(element => typeof element === type)
};

console.log(filterByType('string', 1,2,3,'da', 'adad'));

const filterOutOdds = (...nums) => {
    return nums.filter(element => element % 2 === 0)
}
console.log(filterOutOdds(1,2,3,4));

const findMin = (...nums) => {
    return nums.reduce((acc, val) => {
        return acc < val ? acc : val;
    });
}

console.log(findMin(2,3,-40,-11,200,39));
console.log(findMin(1, -1));

const mergeObjects = (...objs) => {
    return objs.reduce((acc, val) => {
        return {...acc, ...val}});
    }

console.log(mergeObjects({a:1, b:2}, {c:3, d:4}))

const doubleAndReturnArgs = (array, ...args) => {
    const argsArray = [];
    args.map((element) => {
        argsArray.push(element * 2);
    });
    return [...array, ...argsArray];
}

console.log(doubleAndReturnArgs([2],10,4));

const removeRandom = (array) => {
    const remove =  Math.floor(Math.random()*array.length);
     array.splice(remove, 1);
     return array;
}

console.log(removeRandom([1,2,3]));

const extend = (array1, array2) => {  
    return [...array1, ...array2];
}

console.log(extend([1,2,3],[1,2,3]));

console.log("updted");

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

console.log(removeKey({'a':1, 'b':2, 'c':2, 'd':4}, 'b'));

const addKeyVal = (obj, key, val) => {
    return Object.assign(obj, {[key]: val});
}

console.log(addKeyVal({'a':1},'d', 2));

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

console.log(combine({'a':1},{'b':2}));

const update = (obj, key, val)=> {
    Object.assign(obj, {[key]: val});
    return {...obj}
}

console.log(update({'q':2, 'a': 23}, 'q', 28));