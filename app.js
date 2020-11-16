let total;
total = 0;

function a(x, y){
    let sum1 = x + y;
    console.log(sum1);
    return sum1;
};

function b(x,y){
    let sum2 = x + y;
    console.log(sum2);
    return sum2;
};
total = a(12,12) + b(14,14);
console.log(total);

