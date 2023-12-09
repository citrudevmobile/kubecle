
import React, { useState, useEffect } from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home({authenticate}) {
    let navigate = useNavigate()
    useEffect(()=>{
        
    }, [])
    return (
      <div class="font-jost hyphens-manual">
       <h1>Kubecle</h1>
       <p>Crypto Payday Loans on Hosted Apps</p>
      </div>
    )
}