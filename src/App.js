import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { v4 as uuidv4 } from 'uuid'
import Join from './pages/join'
import Room from './pages/room'
import './App.css'

export default function App() {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])
  const [message, setmessage] = useState('')
  const [userName, setUserName] = useState('')
  const [isTyping, setIsTyping] = useState('')
  const [userTyping, setuserTyping] = useState('')
  const [isCreateroom, setIscreateRoom] = useState(false)
  const [roomName, setRoomName] = useState('')
  const [roomCode, setRoomCode] = useState('')
  const [shareCode, setShareCode] = useState(null)
  const [isChat, setIsChat] = useState(false)

  useEffect(() => {
    const newSocket = io("http://localhost:9090")
    setSocket(newSocket)


    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }

    newSocket.on('user-typing', (data) => {
      console.log(data);

      setuserTyping(data.userName)
      setIsTyping(true)
    })

    newSocket.on('stop-typing', (data) => {
      console.log(data);
      setuserTyping('')
      setIsTyping(false)
    })

    newSocket.on('message', (data) => {
      console.log(data);
      if (data.roomName) setRoomName(data.roomName)

      showNotification(`New message from ${userName}`, data.message)
      setMessages((prevMsg) => [...prevMsg, data])
      setShareCode(data.roomCode)
    })

    return (() => {
      if (socket) {
        socket.off('userJoined')
        showNotification('User disconnected', `${userName} left the room`)
      }
    })
  }, [])

  const showNotification = (title, body) => {
    if (Notification.permission === 'granted') {
      new Notification(title, { body })
    }
  }

  const sendMesage = () => {
    if (socket && message.trim() !== '') {
      socket.emit('room-message', { roomCode, message, userName });
      setmessage('')
    }
  }

  const joinRoom = () => {
    if (roomCode.trim() === '') {
      alert("Please enter Room Name");
      return;
    }
    if (socket && roomCode.trim() !== '' && userName.trim() !== '') {
      socket.emit('join-room', { roomCode, userName })
      setIsChat(true)
    }
  }

  const handleTyping = () => {
    let typeTimeOut;
    if (socket && message.trim() !== '') {
      socket.emit('user-typing', { roomCode, userName })
    }

    clearTimeout(typeTimeOut)

    typeTimeOut = setTimeout(() => {
      socket.emit('stop-typing', { roomCode, userName })
    }, 1000)
  }

  const createRoom = () => {
    if (roomName.trim() === '') {
      alert("Please enter Room Name");
      return;
    }

    const code = uuidv4();
    setRoomCode(code);
    if (socket && code.trim() !== '' && userName.trim() !== '') {
      socket.emit('create-room', { roomCode: code, roomName });
      setIscreateRoom(false);
    }
  };

  return (

    <div className='app ' >
      {!isChat ? <Join setIscreateRoom={setIscreateRoom}
        isCreateroom={isCreateroom}
        userName={userName}
        setUserName={setUserName}
        roomName={roomName}
        setRoomName={setRoomName}
        createRoom={createRoom}
        setRoomCode={setRoomCode}
        roomCode={roomCode}
        shareCode={shareCode}
        setIsChat={setIsChat}
        joinRoom={joinRoom}></Join> :

        <Room messages={messages}
          message={message}
          roomName={roomName}
          setmessage={setmessage}
          handleTyping={handleTyping}
          sendMesage={sendMesage}
          isTyping={isTyping}
          userTyping={userTyping}></Room>
      }
    </div>

  )
}