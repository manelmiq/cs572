

Array.prototype.pluck = function (largest) {
    if (largest) {
        setImmediate(
            () => {
                console.log( Math.max(...this));
            }
        )
    } else {
        setTimeout(
            () => {
                console.log( Math.min(...this));
            }, 0
        )
    }
};


console.log('start');
[1, 2, 3, 4, 5, 6, 7, 8].pluck(true);
[1, 2, 3, 4, 5, 6, 7, 8].pluck(false);
console.log('end');