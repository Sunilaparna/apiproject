import React from "react";
import axios  from "axios";
import {useState,useEffect} from "react"

const baseURl="./api.json"
export default function Axiosdata(){
    const[user,setUser]=useState(null)
    useEffect(()=>{
        axios.get(baseURl)
        .then(res=>{
            const users = res.data;
            setUser({users})
        })
    },[])
    if(!user) return null
    return(
        <div>
            <table>
                <tbody>
                    {user.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
          
         
        </div>
    )
}
