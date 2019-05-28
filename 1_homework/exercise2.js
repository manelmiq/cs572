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
         ((json.results[0])).then(function (data) {
            console.log(getNameAndLocation(data));
        });
    } catch (e) {

    }
}

usingAsyncI();
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





