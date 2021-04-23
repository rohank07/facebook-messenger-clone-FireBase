import React from 'react';
import './Message.css';
import FlipMove from 'react-flip-move';
import {Card,CardContent, forwardRef, Typography} from '@material-ui/core';
//username is the user who has logged in
const Message = forwardRef(({username, message}, ref) => {

    const isUser = username === message.username;


    return (
        // if isUser true, && means return 'message_user' otherwise return 'message'
        <div className ={`message ${isUser && 'message_user'}`}>
            <Card className = {isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {message.username} : {message.message}       
                    </Typography>
                </CardContent>

            </Card>

        </div>
    )
})

export default Message
