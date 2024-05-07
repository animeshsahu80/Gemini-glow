import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'
import  { useContext } from 'react'

import { context } from '../../context/Context';
function Sidebar() {

    const [extended, setExtended] =useState(true);
    const changeState= ()=>{
        setExtended((prev)=> !prev)
    }
    const loadPrompt= async (prompt)=>{
        // setRecentPromt(prompt)
        console.log(prompt);
        await onSent(prompt,false);
    }
    const {
        input,
        setInput,
        recentPrompt,
        setRecentPromt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,
        newChat
        }= useContext(context)
        
  return (
    <div className={`sidebar ${extended ? '' : 'hidden'}`}>
        <div className="top">
            <img onClick={changeState} className='menu' src={assets.menu_icon} alt="" />
            <div onClick={()=>newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                <p className={extended ? 'new-chat-not-hidden' : 'new-chat-hidden'}>
                    New Chat
                </p>
            </div>
            <div className={`recent ${extended ? 'recent-not-hidden' : 'recent-hidden'}`}>
                <p className="recent-title">

                   Recent
                </p>
                {prevPrompt.map((item,index)=>{
                    return(
                        <div key={index} className="recent-entry" onClick={()=>loadPrompt(item)} >

                        <img src={assets.message_icon} alt="" />
                        <p className="recent-entry-content">
                            {item}
                        </p>
                         </div>
                    )
                })}
                
            </div>
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
             <p className={extended ? 'bottom-text-not-hidden' : 'bottom-text-hidden'}>  Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                 <p className={extended ? 'bottom-text-not-hidden' : 'bottom-text-hidden'}> Activity</p> 
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                 <p className={extended ? 'bottom-text-not-hidden' : 'bottom-text-hidden'}> Settings</p> 
            </div>
        </div>
    </div>
  )
}

export default Sidebar