const scores = [
    0,0,25,75,100
];

function myFind(array, func){
    for (let elements of array){
        if (func(elements) === true){
            return elements;
        }
    }

}

console.log(myFind(scores, function(element){
     return element > 2;
}))

function myIndex(array, func){
    for (let elements = 0; elements < array.length; elements++){
        if (func(array[elements]) === true){
            return elements;
        }
    }
    return -1;

}
console.log(myIndex(scores, function(element){
    return element > 205;
}))

//findUserByUsername

function findUserByUsername(array, searchValue){
   return array.find(function(element){
    if (Object.values(element).toString() === searchValue){
        return element;
    }
   });
}
const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

console.log(findUserByUsername(users, 'akagen'));

//removeUser
function removeUser(array, searchValue){
    const indexFinder = array.findIndex(function(element, i, arrays){
        if(Object.values(element).toString() === searchValue){
            return element;
        }
    });
    if (indexFinder !== -1){
        array.splice(indexFinder, 1);
        const element = array[indexFinder];
        return { element, indexFinder, array };
    }
    else {
        return typeof(undefined);
    }

}
// function removeUser(usersArray, username) {
// let foundIndex = usersArray.findIndex(function(user){
//     return user.username === username;
//   })
//   if(foundIndex === -1) return;

//   return usersArray.splice(foundIndex,1)[0];
// }

console.log(removeUser(users, 'mlewis'));
console.log(removeUser(users, 'mlewis'));


