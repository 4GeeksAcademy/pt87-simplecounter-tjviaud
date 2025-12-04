import React, { useState, useEffect } from "react";
import SecondsCounter from "../components/SecondsCounter.jsx";




function Home () {
    const [seconds, setSeconds]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>
        setSeconds((prev)=>prev+1),1000);
        return () => clearInterval (interval);
    }, []);
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <SecondsCounter seconds={seconds}/>
        </div>
    ) 
}


   

export default Home;