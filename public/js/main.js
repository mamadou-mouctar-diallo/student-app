const btn = document.getElementById('btn')
const message = document.getElementById('message')
const socket = io()
btn.addEventListener('click', event => {
    event.preventDefault()
    console.log(message.value)
    socket.emit('msg', message.value)
})