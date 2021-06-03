import React from 'react';

import './Input.css';
import closeIcon from 'C:\\Users\\siddh\\Desktop\\Sisyphus\\Programming\\React\\real-time-chat\\client\\src\\icons\\closeIcon.png';
import onlineIcon from 'C:\\Users\\siddh\\Desktop\\Sisyphus\\Programming\\React\\real-time-chat\\client\\src\\icons\\onlineIcon.png';
const Input = ({message, sendMessage, setMessage}) => (
    <form className="form">
        <input className="input"
        type="text"
        placeholder="Type a message.."
        value={message} 
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key==='Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default Input;