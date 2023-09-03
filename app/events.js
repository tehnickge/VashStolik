const Logger = require('./log');
const logger = new Logger();

logger.on('some_event', (text) => {
    console.log(text);
});

logger.log('User Logged!')

