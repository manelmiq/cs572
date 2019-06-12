function first() {
    console.log('first');
}
function second() {
    console.log('second');
}
function third() {
    console.log('third');
}
first();
setTimeout(second, 50); // Invoke `second` after 1000ms
for(let  i = 1; i < 10000; i++) {
    third();
}

