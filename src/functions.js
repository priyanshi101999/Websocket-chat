export function CreateRoom({ createRoom,
    roomName,
    setRoomName,
    shareCode,
    setIsChat }) {
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
                    <input value={shareCode} className="form-control space-input " />
                    <p>Share this code with your friends and invite them to join</p>
                    <button onClick={() => setIsChat(true)} className="btn btn-outline-dark space-btn mt-5">Next</button>
                </>
            }
        </>
    )
}


export function ExistingRoom({ joinRoom,
    setIsChat,
    roomCode,
    setRoomCode
}) {
    console.log(setRoomCode);

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            joinRoom()
        }}>
            <label className="mt-2">Join room</label>
            <input type='text' value={roomCode} onChange={(e) => setRoomCode(e.target.value)} className="form-control space-input " />
            <button type='submit' className="btn btn-outline-dark space-btn mt-5" >Join Room</button>
        </form>
    )

}

export function MessageBox({
    isTyping,
    userTyping,
    message,
    handleTyping,
    setmessage,
    sendMesage
}) {
    return (
        <div className="d-flex flex-column-reverse px-lg-3" style={{ height: '100% ', justifyContent: 'flex-end' }}>

     
            {isTyping && (
                <div style={{ position: 'absolute', bottom: '60px', left: '14px', color: '#888' }}>
                    <span>{userTyping} is typing...</span>
                </div>
            )}

       
            <div className="flex-grow-1 overflow-auto py-lg-3">
         
            </div>

        
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    sendMesage();
                }}
                className="py-2"
                style={{ position: 'relative' }}
            >
                <div className="d-flex align-items-center">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => {
                            setmessage(e.target.value);
                            handleTyping();
                        }}
                        className="form-control me-2"
                        placeholder="Type a message"
                    />
                    <button type="submit" className="btn btn-outline-dark me-2">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
