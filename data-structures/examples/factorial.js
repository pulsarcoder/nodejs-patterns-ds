const fact = (num) => (num < 0 ? -1 : num === 0 ? 1 : (num * fact(num - 1)));

console.log('factorial is => ', fact(0));