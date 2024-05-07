import { createContext, useState } from "react";
import runChat from "../config/gemini";


export const context=createContext();


const ContextProvider= (props)=>{

    const onSent= async (prompt,fromInput)=>{

        setResultData("");
        setLoading(true);
        setShowResult(true);

        if(fromInput){
            setPrevPrompt((prev)=>[...prev,prompt])

        }
        setRecentPromt(prompt)
        const response=await runChat(prompt);
        console.log(response);
        let newResponse=response.replace(/^## /, '');
        newResponse = newResponse.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        newResponse=newResponse.replace(/\*/g, '<br>')

        let finalDataArray= newResponse.split(" ");

        for(let i=0;i<finalDataArray.length;i++){
            const nextWord= finalDataArray[i];
            delayPara(i,nextWord+ " ");
        }
        setLoading(false);
        setInput("");
    }

    const newChat= ()=>{
        setLoading(false);
        setShowResult(false);
    }

    const [input , setInput]= useState("");
    const [recentPrompt, setRecentPromt]= useState("");
    const [prevPrompt, setPrevPrompt]= useState([]);
    const [showResult, setShowResult]= useState(false);
    const [loading, setLoading]= useState(false);
    const [resultData,setResultData]=useState("");

    const delayPara= (index, nextWord)=>{
        setTimeout(()=>{
            setResultData(prev=> prev+nextWord)
        },75*index);
    }

 
    const contextValue={
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
    }

    return ( <context.Provider value={contextValue}>
        {props.children}
    </context.Provider>)
}

export default ContextProvider;
