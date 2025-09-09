import { CreateRoom, ExistingRoom } from "../functions";


export default function Join({
    setIscreateRoom,
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
    console.log(shareCode);

    return (
        <div
            className=" container custom mt-lg-5 p-4 "         
        >
            <div>
                <div className="btn-group mb-4" role="group">
                    <button
                        onClick={() => setIscreateRoom(true)}
                        className={`btn btn-sm ${isCreateroom || shareCode ? 'btn-dark' : 'btn-outline-dark'}`}
                    >
                        Create Room
                    </button>
                    <button
                        onClick={() => setIscreateRoom(false)}
                        className={`btn btn-sm ${!isCreateroom && !shareCode ? 'btn-dark' : 'btn-outline-dark'}`}
                    >
                        Join Existing Room
                    </button>
                </div>
            </div>

            <label>User Name</label>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="form-control mb-3"
                style={{
                    fontSize: '1rem',
                    padding: '10px',
                }}
            />
            
            {(isCreateroom || shareCode) && (
                <CreateRoom
                    createRoom={createRoom}
                    roomName={roomName}
                    setRoomName={setRoomName}
                    shareCode={shareCode}
                    setIsChat={setIsChat}
                />
            )}

            {!isCreateroom && !shareCode && (
                <ExistingRoom
                    joinRoom={joinRoom}
                    setIsChat={setIsChat}
                    roomCode={roomCode}
                    setRoomCode={setRoomCode}
                />
            )}
        </div>
    );
}
