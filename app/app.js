const socket = io('ws://localhost:8080')

// Display message on browser
socket.on('message', text => {
    const el = document.createElement('li')
    el.innerHTML = text
    document.querySelector('ul').appendChild(el)
})

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value
    document.querySelector('input').value = ""
    socket.emit('message', text)
} 

document.querySelector('input').addEventListener('keydown', (event)=>{
    if (event.key === 'Enter') {
        const text = document.querySelector('input').value
        document.querySelector('input').value = ""
        socket.emit('message', text)
    }
})