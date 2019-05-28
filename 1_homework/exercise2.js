
var output = document.getElementById('result');

var getNameAndLocation = function (obj) {
    return {
        name: obj.name.first + ' ' + obj.name.last,
        location: (obj.location.city + ' ' + obj.location.state)
    }
};



function usingFetchAPI() {
    fetch('https://randomuser.me/api/')
        .then(
            response => response.json()
        )
        .then(
            myJson => console.log(getNameAndLocation(myJson.results[0])));
}

async function usingAsyncI() {
    try {
        let response = await fetch('https://randomuser.me/api/');
        let json = await response.json();
        return  ((json.results[0]));
    } catch (e) {

    }
}

function usingAsynAPI() {
    usingAsyncI().then(
        function (results) {
            console.log(getNameAndLocation(results));
        }
    );
}

usingAsynAPI();
usingFetchAPI();


function usingObservable() {
    const {from} = rxjs;
    const {flatMap} = rxjs.operators;


    from(fetch('https://randomuser.me/api/'))
        .pipe(
            flatMap((x) => (x.json()))
        )    // .subscribe((e) => console.log(getNameAndLocation(e)));
        .subscribe(
            (e) => console.log(getNameAndLocation(e.results[0]))
        );
}

usingObservable();





