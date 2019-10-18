import openSocket from 'socket.io-client';
//const socket = openSocket('http://localhost:3002');
const socket = openSocket('http://10.0.10.14:3002');

function subscribeToTimer(cb) {
    console.log("hello");
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

function startTimer(interval) {
    console.log("Timer started. Commands being sent every ", interval);
    setInterval(() => {
        socket.emit('event', 0);
    }, interval);
}

function sendEvent(e, v) {
    console.log("Event: " + e);
    console.log("Value: " + v);
    socket.emit(e, v);
}

export {subscribeToTimer}
export {startTimer}
export {sendEvent}