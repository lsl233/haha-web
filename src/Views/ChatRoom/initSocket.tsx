import io from 'socket.io-client'

const socket = io('http://localhost:3000')

socket.on('connection', () => {
  console.log('成功链接')
});

export default socket
