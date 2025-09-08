import { CreateRoom, ExistingRoom } from "../functions"

export default function Join({ setIscreateRoom,
    isCreateroom,
    userName,
    setUserName,
    roomName,
    setRoomName,
    roomCode,
    setRoomCode,
    createRoom,
    joinRoom,
    shareCode,
    setIsChat
}) {
    console.log(setRoomCode);

    return (
        <div class="container mt-5" style={{ width: "500px" }}>
            <div>
                <h5>Choose room option</h5>
                <div className="btn-group mb-5" role="group">
                    <button
                        onClick={() => setIscreateRoom(true)}
                        className={`btn btn-sm ${isCreateroom ? 'btn-dark' : 'btn-outline-dark'}`}
                    >
                        Create Room
                    </button>
                    <button
                        onClick={() => setIscreateRoom(false)}
                        className={`btn btn-sm ${!isCreateroom ? 'btn-dark' : 'btn-outline-dark'}`}
                    >
                        Join Existing Room
                    </button>
                </div>
            </div>


            <label>User Name</label>
            < input type='text' value={userName} onChange={(e) => setUserName(e.target.value)}
                className="form-control" />
            {isCreateroom && <CreateRoom createRoom={createRoom}
                roomName={roomName}
                setRoomName={setRoomName}
                shareCode={shareCode}
                setIsChat={setIsChat}>
            </CreateRoom>}

            {!isCreateroom &&
                !shareCode &&
                <ExistingRoom joinRoom={joinRoom}
                    setIsChat={setIsChat}
                    roomCode={roomCode}
                    setRoomCode={setRoomCode}>
                </ExistingRoom>

            }

            {shareCode && (<>
                <input value={shareCode} readOnly />
                <p>Share this code with your friends and invite them to join</p>
                <button onClick={() => setIsChat(true)}>NEXT</button>

            </>)}


        </div>
    )
}