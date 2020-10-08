import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

export default function Header() {
    return (
        <header id="header">
            <Link className="title" to="/">
                <h1>Home</h1>
            </Link>
            <AuthOptions />
        </header>
    )
}