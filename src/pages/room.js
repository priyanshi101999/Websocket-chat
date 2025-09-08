import { MessageBox } from "../functions";

export default function Room({ messages,
    message,
    setmessage,
    handleTyping,
    sendMesage,
    isTyping,
    userTyping }) {
    return (
        <>
            <div>
                <h2>Websocket Chat</h2>
                <ul>
                    {messages.length > 0 && messages.map((msg, index) =>
                        <li key={index}>
                            <span style={{ color: 'gray', marginRight: '8px' }}>
                                [{msg.timeStamp}]
                            </span>
                            <strong>{msg.from}</strong>: {msg.message}
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <MessageBox isTyping={isTyping}
                    userTyping={userTyping}
                    message={message}
                    handleTyping={handleTyping}
                    sendMesage={sendMesage}
                    setmessage={setmessage}></MessageBox>
            </div>

        </>
    )
}