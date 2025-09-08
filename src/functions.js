export function CreateRoom({createRoom,
    roomName,
    setRoomName,
    shareCode,
    setIsChat}) {
    return (
        <>
            {!shareCode ? <form onSubmit={(e) => {
                e.preventDefault()
                createRoom()
            }} >
                <label className="mt-2">Create room</label>
                <input className="form-control space-input " type='text' value={roomName} onChange={(e) => setRoomName(e.target.value)} />
                <button className="btn btn-outline-dark space-btn mt-5" type="submit">Create Room</button>
            </form> :
                <>
                    <input value={shareCode} readOnly />
                    <p>Share this code with your friends and invite them to join</p>
                    <button onClick={() => setIsChat(true)}>NEXT</button>
                </>
            }
        </>
    )
}


export function ExistingRoom({joinRoom,
    setIsChat,
    roomCode,
    setRoomCode
}) {
        console.log(setRoomCode);
        
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            joinRoom()
            setIsChat(true)
        }}>
            <label className="mt-2">Join room</label>
            <input type='text' value={roomCode} onChange={(e) => setRoomCode(e.target.value)} className="form-control space-input "/>
            <button type='submit' className="btn btn-outline space-btn mt-5" >Join Room</button>
        </form>
    )

}

export function MessageBox({ isTyping,
    userTyping,
    message,
    handleTyping,
    setmessage,
    sendMesage }) {
    return (
        <div>
            {isTyping && <span>{userTyping} is typing...</span>}
            <form onSubmit={(e) => {
                e.preventDefault()
                sendMesage()
            }}>
                <input type='text' value={message} onChange={(e) => {
                    setmessage(e.target.value)
                    handleTyping()
                }} className="form-control space-input my-2"/>
                <button type="submit" className="btn space-btn">Submit</button>

            </form>


        </div>
    )
}