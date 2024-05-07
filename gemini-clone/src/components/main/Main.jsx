import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/Context'
function Main() {

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
    onSent
    }= useContext(context)
    
   
  return (
    <div className='main'>
        <div className='nav'>
            <p>
                Gemini
            </p>
            <img src={assets.final_user} alt="" />
        </div>
        <div className="main-container">

            {!showResult?
            <>
            <div className='greet'>
                <div>
                    <span>Hello,</span>  <p className='typing-animation'> How can i help you?</p>
                </div>
            </div>
            <div className="cards">
                    <div className="card">
                        <p>Sugesst places to go and explore</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Summarize urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brain strom team bonding activites</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve readability of code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
            </div>
            </> 
            : <div className='result'>
                <div className='result-title'>
                    <img src={assets.final_user} alt="" />
                    <p>
                        {recentPrompt}
                    </p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                     <>
                        <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                     </>:
                    <p dangerouslySetInnerHTML={{__html: resultData}}>
                    </p>

                }
                        
                </div>
            </div>
            }
            
        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img onClick={()=>onSent(input,true)} src={assets.send_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main