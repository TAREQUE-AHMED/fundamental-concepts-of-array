const ages = [12, 21, 23, 34, 14, 19];
const result = ages.includes(1);
console.log(result);
if (ages.includes(2)) {
    console.log('Part done');
    
}
else {
    console.log('No party');
    
}

const numbers = [76, 90, 99, 87, 86];
const numbers2 = numbers.indexOf(99);
console.log(numbers2);

console.log(Array.isArray(numbers));

const numbers3 = numbers.slice(0,1);
console.log(numbers3);

const num1 = [10, 14, 15, 18, 20];
const num2 = [20, 22, 24, 26];
const result1 = num1.concat(num2);
console.log(result1);

const name = ['h', 'u', 'l', 'k'];
const result2 = name.join();
console.log(result2);


