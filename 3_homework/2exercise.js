const EventEmitter = require('events');


class Gym extends EventEmitter {
    constructor() {
        super();
        this.message = 'boom!';
    }

    visit() {
        setInterval( () => {
            this.emit('newBoom', this.message);
        }, 1000);

    }
}

var gym = new Gym();

gym.on('newBoom', function (name) {
    console.log('Welcome ' + name)
});

gym.visit();