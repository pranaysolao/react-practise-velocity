import { useState } from "react"
import React from "react";

export default function ValidationForm(){
     const [users]=useState([
        {userId:'Pranay12'},
        {userId:'Pranaysolao'},
        {userId:'Solao123'},
        {userId:'Solaopranay'}
     ])

    const [userMsg,setUserMsg]=useState('');
    const[isuserValid,setIsuservalid]=useState(false)
    const [pwdmsg,setPwdMsg]=useState('');
    const [capstatus,setcapstatus]=useState(false)
    

    function VeryfyUserId(e){
        for(var user of users){
            if(user.userId==e.target.value){
                setUserMsg("User Id taken - Try anther")
                setIsuservalid(false)
                break;
            }
            else{
                setUserMsg("Userid avalable")
                setIsuservalid(true)
            }
        }
    }

    function HideuserMsg(){
        setUserMsg('')
    }

    function VeryfyPass(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            setPwdMsg("Strong Password")
        }else{
            if(e.target.value.length<4){
                setPwdMsg('Poor Password')
            }else{
                setPwdMsg("weak password")
            }
        }
    }
    function HidePass(){
        setPwdMsg("");
    }
    function verycaps(e){
        if(e.keyCode==65 && e.keyCode<=90){
          setcapstatus(true)
        }
        else{
            setcapstatus(false)
        }
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onBlur={HideuserMsg} onKeyUp={VeryfyUserId} /></dd>
                <dd className={(isuserValid==true)?'text-success':'text-danger'}>{userMsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyUpCapture={verycaps} onBlur={(HidePass)} onKeyUp={VeryfyPass}/></dd>
                <dd>{pwdmsg}</dd>
                <dd className={(capstatus==true)?'d-block':'d-none'}>
                    <span className="bi bi-exclamation-triangle"></span>Caps ON
                </dd>
                <button className="btn btn-primary">Register</button>
            </dl>
        </div>
    )
}