import React, {forwardRef} from 'react';
import './Message.css';
import {Card,CardContent, Typography} from '@material-ui/core';
//username is the user who has logged in
//cannot render the key in the UI
const Message = forwardRef(({key ,username, message}, ref) => {

    const isUser = username === message.username;
    return (
        // if isUser true, && means return 'message_user' otherwise return 'message'
        //ref - identifier to each element/message
        <div ref = {ref} className ={`message ${isUser && 'message_user'}`}>
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


