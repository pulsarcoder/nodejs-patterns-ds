
const array = [1, 2, 3, 4, 5];

/**
 * find the pair of elements and sum of those divisible by 3
 * arr = 1,2,3,4,5,6,7
 * counter = 0
 * 1 -> 2 => 1 + 2 => 3 => 3 % 3 === 0 => true, counter+1
 * 1 -> 3 => 1 + 3 => 4 => 4 % 3 === 0 => false, counter+1
 * 1 -> 4 => 1 + 4 => 5 => 5 % 3 === 0 => false, counter+1
 * 1 -> 5 => 1 + 5 => 6 => 6 % 3 === 0 => true, counter+1
 * 1 -> 6 => 1 + 6 => 7 => 7 % 3 === 0 => false, counter+1
 * 1 -> 7 => 1 + 7 => 8 => 8 % 3 === 0 => false, counter+1
 * if (counter === arr.length - 1) => counter = 6 === arr.length - 1 => true
 * counter = 1
 * 2 -> 3 => 2 + 3 => 5 => 5 % 3 === 0 => false, counter + 1
 * 2 -> 4 => 2 + 4 => 6 => 6 % 3 === 0 => true, counter + 1
 * 2 -> 5 => 2 + 5 => 7 => 7 % 3 === 0 => false, counter + 1
 * 2 -> 6 => 2 + 6
 * 2 -> 7 => 2 + 7 => 9 => true
 * counter = 2
 * @param {*} arr 
 * @param {*} k 
 * @param {*} counter 
 */
const pairsDivisibleByK = (arr, k, counter) => {
    //console.log('counter => ', counter, arr.length);
    if (counter === arr.length - 1) {
        // console.log('end');
    } else {        
        for (let i = counter + 1; i < arr.length; i++) {
            //console.log(`${i} -> ${counter}, ${arr[counter]} -> ${arr[i]} => ${arr[counter] + arr[i]} => ${(arr[counter] + arr[i]) % 3 === 0}`);
            if ((arr[counter] + arr[i]) % k === 0) {
                console.log(`pair is (${arr[counter]}, ${arr[i]})`);
            }
        }
        pairsDivisibleByK(arr, k, counter + 1);
    }
}

pairsDivisibleByK([2, 2, 1, 7, 5, 3], 4, 0);

const pairsDivisibleByKIterative = (arr, k) => {
    let counter = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        counter++;
        for (let j = i + 1; j <= arr.length - 1; j++) { // O(n)
            counter++;
            if ((arr[j] + arr[i]) % k === 0) { // 
                console.log('pair is ', arr[i], arr[j]);
            }
        }
    }
    console.log(counter);
}
pairsDivisibleByKIterative([1, 2, 3, 4, 5], 3);