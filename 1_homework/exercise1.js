var filterByNumber = function (arr, element) {
    return arr.filter((number) => (number !== element));
};


var filterArray = function (arr, element) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(filterByNumber(arr, element));
        }, 0);
    });
};


async function filterAsync(arr, element) {
    try {
        return await filterArray(arr, element).then(
            function (results) {
                console.log(results);
            }
        );
        // return result;
    } catch (e) {
        console.log(e);
    }
}

Array.prototype.removeNum = function (num) {
    var result ;
    filterArray(this, num).then(function (results) {
        console.log(results);
        result = results;
    }).catch(
        function () {
            console.log('');
        }
    );
    return result;

    // return  filterAsync(this, num)
    //      .then(
    //          function (results) {
    //              console.log(results);
    //          }
    //      ).catch();
};


console.log("Start");
console.log([1, 3, 4, 2, 1, 5].removeNum(1));
console.log("Finish");

