module.exports = function reverse (n) {

    let res = String(Math.abs(n)).split('').reverse().join('');
    return res;
}
