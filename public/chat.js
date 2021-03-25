const socket=io.connect('http://localhost:4000')

const output=document.getElementById('output')
const handle=document.getElementById('handle')
const message=document.getElementById('message')
const send=document.getElementById('send')
const feedback=document.getElementById('feedback')
send.addEventListener('click',()=>{

socket.emit('chat',{
    handel:handle.value,
    message:message.value
})
message.value = "";
})

socket.on('chat',(data)=>{
    feedback.innerHTML=''
    output.innerHTML+=`<p><strong>${data.handel} : </strong>${data.message}</p>`
})
message.addEventListener('keypress',()=>{

    socket.emit('typing',handle.value);
})

socket.on('typing',(data)=>{
    feedback.innerHTML='<p><em>' + data + ' is typing a message...</em></p>';
})