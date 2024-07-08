import { Box, TextField, Button, Typography } from '@mui/material';
import {FaRobot} from 'react-icons/fa'

import { FaUserGraduate } from "react-icons/fa6";
import { FaPaperPlane } from 'react-icons/fa';
import {SendHorizonal,Ellipsis} from 'lucide-react'
import './index.css'
import { useEffect, useState } from 'react';
import Markdown from "markdown-to-jsx";



const Chatbot = () =>{

    const sendMessage = async() => {
      
      if (prompt.trim() === "") {
        return;
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", message: prompt },
      ]);
      setInput("")
      setIsTyping(true);
      
      const object =  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt,codeSnippet}),
      }
      const response = await fetch("http://localhost:3000/chatbot/",object)
      const data = await response.json()
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", message: data.result },
      ]);
      setIsTyping(false);
    }
    const setInputData = (e) =>{
      setInput(e.target.value)
      
    }

    const getCode = e =>{
      setCode(e.target.value)
    }
    const [prompt,setInput] = useState("")
    const [codeSnippet,setCode] = useState("")
    const [isTyping, setIsTyping] = useState(false);

    const [messages, setMessages] = useState([]);
    return(
      <div>
        <div style={{display:"flex"}} className='p-1'>
          <div className=' rounded-lg ' style={{width:"100%"}}>
            <div className='p-3 bg-white mr-1 bg-card' style={{height:"78.5vh",overflowY:"auto",overflowX:"hidden"}} >
              {messages.map(each =>(
                <div>
                  {console.log(each)}
                {each.type == "user" ? <div className='row w-full ml-36 mt-1 mb-4'>
                  <div className='row'>
                    <h1 className='w-9/12  text-white bg-slate-400 p-3 rounded-md'>{each.message}</h1>
                    <FaUserGraduate className='w-1/12 mt-3 text-blue-700'/> 
                  </div>
                </div>:
                <div className='row w-full mb-4'>
                  <FaRobot className='w-1/12 mt-3 text-blue-700'/> 
                  {/* <h1 className='w-10/12 text-white bg-gray-500 p-3 rounded-md'>{each.message}</h1> */}
                  <Markdown
                      className="w-10/12 text-white bg-black p-3 rounded-md"
                      options={{ forceBlock: true }}
                    >
                      {each.message}
                    </Markdown>
                </div>}
                
                </div>
              ))}
              {isTyping && (
                <div className="w-full flex items-center">
                  <div className="p-2 rounded-md text-black">
                    <Ellipsis size={24} />
                  </div>
                </div>
              )}
              
              
            </div>
          </div>
          <div className='w-1/2'>
            <textarea type="text" rows={23.5} onChange={getCode} value={codeSnippet}  className='form-control border-2' placeholder='Have any code snippets to share? Paste it here! and share the prompt below'/>
          </div>
        </div>
        <div className="h-16 w-full flex items-center justify-center bg-white">
        <div className="w-full h-14 px-2 flex items-center justify-between space-x-2 border border-border rounded-md">
          <input
            placeholder="Type your prompt here"
            className="w-full h-12 ring-offset-0 border-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0 form-control"
            onChange={setInputData}
            value={prompt}
            
          />
          <button
            variant="outline"
            size="icon"
            className="flex items-center justify-center w-10 h-10"
            onClick={sendMessage}
            id="send-prompt"
          >
            <SendHorizonal size={24} />
          </button>
        </div>
      </div>
      </div>
    )
}

export default Chatbot