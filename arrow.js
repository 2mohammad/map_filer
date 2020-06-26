const double = ((arr) => { 
    return arr.map((val) => (val * 2));
})

console.log(double([1,2,3]));

const squareAndFindEvens = ((numbers) => {
    var squares = numbers.map((num) =>{
        return num ** 2;
    });
    var evens = squares.filter((square)=>{
        return square % 2 === 0;
    });
    return evens;
});

console.log(squareAndFindEvens([1,2,3,4]));