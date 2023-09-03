const { count } = require('console');
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log = (msg) => {
        console.log(msg);
        this.emit('some_event', {id: 1, text: 'event test text!'});
    }
    
}


module.exports = Logger;