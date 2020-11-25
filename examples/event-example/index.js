const EventEmitter = require("events");

const myEmitter = new EventEmitter();

const sendConfirmationEmail = (payload) => { console.log('Sending email...', payload.email); };
const sendWelcomeSMS = (payload) => { console.log('sending welcome sms...', payload.phone); };

myEmitter.on('USER_HAS_REGISTERED', sendConfirmationEmail);
myEmitter.on('USER_HAS_REGISTERED', sendWelcomeSMS);

setTimeout(() => myEmitter.emit('USER_HAS_REGISTERED', { username: 'tim', email: 'tim@gmail.com', phone: '987655783'}), 100);