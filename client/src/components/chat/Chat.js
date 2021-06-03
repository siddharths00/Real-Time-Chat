import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './chat.css';
import InfoBar from 'C:\\Users\\siddh\\Desktop\\Sisyphus\\Programming\\React\\real-time-chat\\client\\src\\components\\infoBar\\InfoBar.js';
import Input from 'C:\\Users\\siddh\\Desktop\\Sisyphus\\Programming\\React\\real-time-chat\\client\\src\\components\\Input\\Input.js';
import Messages from 'C:\\Users\\siddh\\Desktop\\Sisyphus\\Programming\\React\\real-time-chat\\client\\src\\components\\Messages\\Messages.js';
let socket;

const Chat = ({location}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages ] = useState([]);
    const [message, setMessage] = useState('');

    const endpoint = 'https://chat-using-socket.herokuapp.com/';

    useEffect(()=>{
        // The following code acts like componentDidMount and componentDidUpdate.
        // So this piece of code will run everytime the component is loaded or unloaded.
        const {name, room} = queryString.parse(location.search);
        socket = io(endpoint);
        setName(name);
        setRoom(room);
        socket.emit('join', { name, room}, () => {

        });
        // The above is the same as writing socket.emit('join', { name:name, room:room});

        // The below return statement is like componentDidUmmount.
        return () => {
            socket.emit('disconnect');
            socket.off(); 
        }
    }, [endpoint, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    },[messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
        // console.log(message, messages);
    };

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar propRoom={room}/>
                <Messages messages = {messages} name={name}/>
                <Input message = {message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
}
export default Chat;