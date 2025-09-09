import { useState } from "react"

export function CreateRoom({ createRoom,
    roomName,
    setRoomName,
    shareCode,
    setIsChat }) {

    const [Copy, setCopy] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareCode).then((res) => {
            setCopy(true)
            setTimeout(() => setCopy(false), 2000)
        })
    }
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
                    <div className="d-flex align-items-center">
                        <input value={shareCode} className="form-control w-90 " />
                        <i
                            className="bi bi-clipboard ms-3"
                            style={{ cursor: "pointer", fontSize: "1.2rem" }}
                            onClick={copyToClipboard}
                            title="Copy to clipboard"
                        ></i>
                    </div>
                    {Copy ? <p>code copied</p> :
                        <p>Share this code with your friends and invite them to join</p>}
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
        <div >
            {isTyping && (
                <div style={{ color: '#888', marginBottom: '5px' }}>
                    {userTyping} is typing...
                </div>
            )}

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    sendMesage();
                }}
                className="d-flex"
            >
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
                <button type="submit" className="btn btn-outline-dark">
                    Send
                </button>
            </form>
        </div>
    );
}
