import './App.css';
import React, {useState, useEffect } from 'react';
import { FormControl , Button, InputLabel, Input} from '@material-ui/core';
import Message from './Message';
import {db} from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername ] = useState('');

  useEffect(() => { // executes on condition
    // run code
    //if its blank, this code runs on launchs only once
    setUsername(prompt('Please enter your name:'));
    
    }  
  , []) // condition

  //db load
  useEffect(()=>{
    // run once when the app component loads
      db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data()}))) // returns a object
    });
  },[]);

  const sendMessage = (event) => {
    //forms refresh on submit
    event.preventDefault();
    //all logic to send message
    //setMessages([...messages, {username: username , text: input}]); //no longer need to set state; since DB pushes and refreshes page with data
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() //server time zone
    })

    setInput('');
  
 };

  return (
    <div className="App">
      <img src = "https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=150&h=150"/>
      <h1>Facebook Messenger</h1>
      <h2>Hello {username}!</h2>
      <form className ="app__form">
        <FormControl>
          <InputLabel>Enter Message</InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)} aria-describedby="my-helper-text" />
          <Button variant = 'contained'  color = 'primary' type= 'submit' disabled= {!input} onClick = {sendMessage}>Send message</Button>
        </FormControl>
      </form>

      <FlipMove>
        {
            messages.map(({id ,message}) => 
            //add a key to only render the newest message, not the entire message list
            // key is necessary in rendering lists, it knows that nothing was changed with other elements. It does not render it.
            <Message key= {id} username = {username} message = {message}/>)
        }
        </FlipMove>
    </div>
    
  );
}

export default App;
