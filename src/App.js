import './App.css';
import React, {useState} from 'react';


function App() {

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState('');

  console.log('input '+ input);
  
  const sendMessage = (event) => {
//
    
  //all logic to send message
    setMessages([...messages], input);
    setInput('');
    console.log(messages);

 };

 console.log(input)
  return (
    <div className="App">
      <h1>Hello</h1>
      <input value = {input} onChange = {event => setInput(event.target.value)} />
      <button disabled= {!input} onClick = {sendMessage}>Send message</button>

    </div>
  );
}

export default App;
