import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'

import Message from './Message'

import '../userChat/Chat.scss'

let socket

const Chat = ({ location }) => {
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const ENDPOINT = 'localhost:8000'

    useEffect(() => {
        const { username, room } = queryString.parse(location.search)
        socket = io(ENDPOINT)

        console.log(room)
        setUsername(username)
        setRoom(room)

        console.log(socket)

        socket.emit('join', { username, room }, () => {

        })

        return () => {
            socket.emit('disconnect')

            socket.off()
        }

    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })
    }, [messages])

    // Sendind message method
    const sendMessage = (event) => {
        event.preventDefault()

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))

        }
    }

    //show people connected method
    const showPeople = (event) => {

        return true
    }


    return (
        <div className="chatContainer">
            <div className="messagesContainer">
                <h3>Room you are connected to: "{room}"</h3>
                <div className="messages">
                    <ScrollToBottom>
                        {/* {(!messages) &&
                            (
                                <h1>Something doesnt exists</h1>
                            )
                        } */}
                        {messages && messages.map((message, i) => <div key={i}><Message message={message} username={username} /></div>)}
                    </ScrollToBottom>
                </div>
                <div>
                    <form>
                        <input
                            type='text'
                            placeholder='Type a message'
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
                        />
                        <button onClick={(event) => sendMessage(event)}>Send</button>
                    </form>
                    <a href='/dashboard'>Leave Chat</a>
                </div>
            </div>
            {/* <button onClick={event => showPeople(event)}>Show People</button>
            {
                showPeople ? (
                    <div className="peopleChattingContainer">
                        {
                            users
                                ? (
                                    <div>
                                        <h1>People currently in the room:</h1>
                                        <div>
                                            <h2>
                                                {users.map(({ username }) => (
                                                    <div key={username}>
                                                        {username}
                                                    </div>
                                                ))}
                                            </h2>
                                        </div>
                                    </div>
                                )
                                : null
                        }
                    </div>
                ) :
                (
                    null
                )
            } */}
        </div>
    );
};

export default Chat;