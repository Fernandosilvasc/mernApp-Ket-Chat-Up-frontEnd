import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../../context/UserContext";

const Join = () => {
    // const [user, setUser] = useState('')
    const { userData } = useContext(UserContext);
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState('');

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