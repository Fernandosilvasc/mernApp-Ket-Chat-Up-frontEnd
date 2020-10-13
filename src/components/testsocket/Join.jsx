import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Join = () => {
    // const [user, setUser] = useState('')
    const { userData } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");

    useEffect(() => {
        if (userData.user) {
            setUsername(userData.user.userName);
        }
    }, [userData]);

    return (
        <div>
            JOIN TEST
            <input
                placeholder="Room"
                type="text"
                onChange={(event) => setRoom(event.target.value)}
            />
            {username && (
                <Link
                    onClick={(event) => (!room ? event.preventDefault() : null)}
                    to={`/chat?room=${room}&username=${username}`}
                >
                    <button type="submit">Join</button>
                </Link>
            )}
        </div>
    );
};

export default Join;