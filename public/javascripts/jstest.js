// const arr = [];
//
// arr[3] = 1;
// arr['test'] = function(){
//     console.log('go');
// };
//
// arr[4];
// console.log(arr);



const arr = { a : '10', b : '20'};

arr['c'] =  '30';
arr['test'] = function(){
    console.log('go');
};

console.log(arr);

console.log(arr['test']());
arr['test']();
console.log(Object.keys(arr));


