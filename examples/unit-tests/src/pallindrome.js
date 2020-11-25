const removeSpecialChars = func => (...args) => {
    args[0] = args[0].replace(/_/g, '');
    args[0] = args[0].replace(/ /g, '');
    return func(...args);
}

const pallindrome = (str) => str.split('').slice().reverse().join('') === str;

export default removeSpecialChars(pallindrome);