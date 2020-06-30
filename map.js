const myMap = new Map();
myMap.set(7, 'seven');
myMap.set('7', 'seven  string');

const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(mult, 0);

const bandData = [
    [3, '3 doors down'],
    ['three', 'Three Dog Night'],
    [41, 'Sum 41']
];

const bandMap = new Map(bandData);
const bandArray = [...bandMap];

bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox Twenty');
[...bandMap.keys()];
console.log(bandMap.get(182));
console.log(bandMap.size);

bandMap.forEach((val, key) => {
    console.log(key + ' => ' + val);
});

for (let [key, value] of bandMap){
    console.log(key, '=', value);
}

'nofilter', 'justsaying', 'winning', 'yolo';

const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo'
]);
bannedHashTags.add('bestlife');


function filteredHashTags(tags){
    const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo'
]);
    return tags.filter((tag) => !bannedHashTags.has(tag));
    
}

const susanTags = ['happymonday', 'yolo', 'winning', 'sunset'];

console.log(filteredHashTags(susanTags));

const ages = [45, 42, 22, 23, 4, 4, 4, 45];
console.log(ages);
const dupRem = new Set(ages);
console.log(dupRem);
const newArray = [... dupRem];
console.log(newArray);

console.log(new Set([1,1,2,2,3,4])); // [1,2,3,4]
console.log([...new Set('referee')].join("")); // ref
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); //  [[1,2,3] => true, [1,2,3] => false]]

const hasDuplicate = (array) => ([...new Set(array)].length !== array.length)

const vowelCounts = (string) => {
    const vowels = new Set('aeiou');
    const mapd = new Map();
    const bin = [...new Set(string.toLowerCase())].filter((element)=> vowels.has(element));
    for (let element of bin){
        mapd.set(element, string.toLowerCase().split(element).length -1);
    }
    return mapd;
    };


const reducer = (array) => {
    const count = new Map();
    const values = new Set(array);
    values.forEach((element)=> {
        count.set(element, array.filter((arrayElement) => arrayElement === element).length);
    });
    return count;
}
console.log(reducer([1, 2, 3, 5, 2, 8, 9, 2]));

// Map(6) {1 => 1, 2 => 3, 3 => 1, 5 => 1, 8 => 1, …}

const reduced = (array, val) => {
    return array.filter((element) => element === val).length;
}

console.log(reduced([1, 2, 3, 5, 2, 8, 9, 2, 8, 8, 8], 8));

// 3