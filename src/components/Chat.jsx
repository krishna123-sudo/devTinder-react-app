import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { createSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';

function Chat() {
    const { targetUserId } = useParams();
    const location = useLocation();
    const { firstName, lastName, photoUrl } = location.state || {};

    const user = useSelector((store) => store.user)
    const loggedInuserId = user?.user?.data?.result?.data?._id;

    const [message, setMessage] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const socketRef = useRef(null);

    useEffect(() => {
        if (!loggedInuserId || !targetUserId) return;

        // ✅ create ONLY ONCE
        if (!socketRef.current) {
            socketRef.current = createSocketConnection();
        }

        const socket = socketRef.current;

        // console.log("JOIN:", loggedInuserId, targetUserId);

        socket.emit("joinChat", {
            firstName,
            targetUserId,
            loggedInuserId
        });

        // ✅ remove old listener before adding new
        socket.off("messageRecieved");

        socket.on("messageRecieved", ({ firstName, text, senderId }) => {
            // console.log("RECEIVED:", text);

            setMessage(prev => [...prev, { firstName, text, senderId }]);
        });

        return () => {
            socket.off("messageRecieved"); // cleanup only listener
        };

    }, [loggedInuserId, targetUserId]);

    const sendMessage = () => {
        if (!newMessage.trim() || !socketRef.current) return;

        socketRef.current.emit("sendMessage", {
            firstName,
            targetUserId,
            loggedInuserId,
            text: newMessage
        });

        setNewMessage(""); // clear input
    };


    const formatTime = (time) => {
        if (!time) return "";

        const date = new Date(time);

        if (isNaN(date)) return "";

        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-black flex justify-center items-center">
            <div className="w-[600px] h-[80vh] bg-gray-900 flex flex-col rounded-xl">

                {/* Header */}
                <div className="p-4 border-b border-gray-700 flex items-center gap-3">
                    <img src={photoUrl} className="w-10 h-10 rounded-full" />
                    <h2 className="text-white">{firstName} {lastName}</h2>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">

                    {message.map((msg, index) => {

                        const isMe = msg.senderId === loggedInuserId;

                        return (
                            <div
                                key={index}
                                className={`chat ${isMe ? "chat-end" : "chat-start"}`}
                            >

                                {/* Avatar */}
                                {/* <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            src={photoUrl}
                                            alt="profile"
                                        />
                                    </div>
                                </div> */}

                                {/* Header */}
                                <div className="chat-header text-white">
                                    {msg.firstName}
                                    <time className="text-xs opacity-50 ml-2">
                                        {formatTime(msg.time)}
                                    </time>
                                </div>

                                {/* Bubble */}
                                <div
                                    className={`chat-bubble ${isMe
                                        ? "bg-pink-500 text-white"
                                        : "bg-gray-700 text-white"
                                        }`}
                                >
                                    {msg.text}
                                </div>

                                {/* Footer */}
                                <div className="chat-footer opacity-50 text-xs text-gray-300">
                                    {isMe ? "Delivered ✓" : "Seen"}
                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* Input */}
                <div className="p-4 flex gap-2">
                    <input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1 p-2 rounded bg-gray-800 text-white"
                    />
                    <button onClick={sendMessage} className="bg-pink-500 px-4 rounded">
                        Send
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Chat;