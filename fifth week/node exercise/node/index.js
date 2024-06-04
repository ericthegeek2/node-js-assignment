const LogEvent = require('./logEvents')
const EventEmitter = require('events')

const myEmitter = new EventEmitter()

const message = 'log event emitted on june 3rd 2024'

setTimeout(()=>{
    myEmitter.emit('log',message)

},2000)

//listen to the event using myEmitter.on()

myEmitter.on('log', (message)=>{
    LogEvent(message)
})