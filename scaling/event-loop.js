const sleep_it = (t) => new Promise((r) => setTimeout(r, t));
const sleep_im = () => new Promise((r) => setImmediate(r));
/*
(() => {
    setImmediate(() => console.log(1));
    console.log(2)
    sleep_it(0).then(() => console.log(3));
    setImmediate(() => console.log(4));
    console.log(5);
    sleep_im().then(() => console.log(6));
    setImmediate(() => console.log(7));
    console.log(8);
    new Promise((r) => r()).then(() => console.log(9));
    setImmediate(() => console.log(10));
    console.log(11);
})(); // 2 5 8 11 3 6 9 1 4 7 10
*/
// async converts below code as nextTick callback 
// so the await affects the flow of execution stack
/**
 * When it comes to async functions and statements preceded with await, you can almost think of them
 * as being syntactic sugar for code that uses nested callbacks, or even as a chain of .then() calls.
 */
(async () => {
    setImmediate(() => console.log(1));
    console.log(2)
    await sleep_it(0); // Similar to Promise.then(
    setImmediate(() => console.log(4));
    console.log(5);
    await sleep_im(); //new Promise.then
    setImmediate(() => console.log(7));
    console.log(8);
    await 1; // new Promise.then(
    setImmediate(() => console.log(10));
    console.log(11);
})(); // 2 5 1 4 8 11 7 10