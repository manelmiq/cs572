// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/




// (() => new Promise((resolve) => resolve('promise')))().then((p) => console.log(p));
// setTimeout(() => console.log('timeout'), 0);
// setImmediate(() => console.log('immediate'));
//  queueMicrotask(() => console.log('microtask'));
// process.nextTick(() => console.log('nexttick'));
//


//who comes first?

let racer1 = function() {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
}

let racer2 = function() {
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
}

let racer3 = function() {
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
}

racer1()
racer2()
racer3()