import { MessageBox } from "../functions";


export default function Room({
    messages,
    roomName,
    message,
    setmessage,
    handleTyping,
    sendMesage,
    isTyping,
    userTyping
}) {
    return (
        <div
            className="container custom mt-lg-5 p-0"
            style={{
                border: '2px solid black',
                position: 'relative',
                overflow: 'hidden',
             
            }}
        >
            <h6 className="p-3 px-4 bg-dark text-white">{roomName}</h6>

            <div
                className="p-4"
                style={{
                    height: 'calc(100vh - 140px)',
                    overflowY: 'auto', 
                    padding: '1rem', 
                }}
            >
                <ul
                    style={{
                        listStyleType: 'none',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    {messages.length > 0 &&
                        messages.map((msg, index) => (
                            <li
                                key={index}
                                style={{
                                    textAlign: msg.from === 'You' ? 'right' : 'left',
                                    backgroundColor: msg.from === 'You' ? '#2D2D2D' : '#fff',
                                    borderRadius: '15px',
                                    padding: '10px 20px',
                                    margin: '10px 0',
                                    maxWidth: '80%',
                                    alignSelf: msg.from === 'You' ? 'flex-end' : 'flex-start',
                                    color: msg.from === 'You' ? '#fff' : '#2D2D2D',
                                    fontFamily: "'Orbitron', sans-serif",
                                    border: '1px solid #2D2D2D',
                                }}
                                className="d-flex flex-column"
                            >
                                {msg.from && (
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            margin: 0,
                                            padding: 0,
                                            color: '#A0A0A0', 
                                            letterSpacing: '1px',
                                        }}
                                    >
                                        {msg.from}:
                                    </p>
                                )}
                                <p style={{ fontSize: '16px', margin: 0 }}>{msg.message}</p>
                                {msg.timeStamp && (
                                    <span
                                        style={{
                                            color: msg.from === 'You' ? '#fff' : '#2D2D2D',
                                            fontSize: '12px',
                                            marginTop: '5px',
                                            display: 'block',
                                            textAlign: 'right',
                                        }}
                                    >
                                        [{msg.timeStamp}]
                                    </span>
                                )}
                            </li>
                        ))}
                </ul>
            </div>

            <div className="bg-white"
                style={{
                    position: 'absolute',
                    bottom: '0', 
                    width: '100%',
                    padding: '1rem',
                }}
            >
                <MessageBox
                    isTyping={isTyping}
                    userTyping={userTyping}
                    message={message}
                    handleTyping={handleTyping}
                    sendMesage={sendMesage}
                    setmessage={setmessage}
                />
            </div>
        </div>
    );
}
