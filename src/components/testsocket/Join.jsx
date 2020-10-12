import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Join = () => {
    const [user, setUser] = useState('')
    const [username, setUsername] = useState('TestUser')
    const [room, setRoom] = useState('')

    return (
        <div>
            JOIN TEST
            <input placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)} />
            <Link onClick={event => (!room) ? event.preventDefault() : null} to={`/chat?room=${room}&username=${username}`}>
                <button type="submit">Join</button>
            </Link>
        </div>
    );
};

export default Join;