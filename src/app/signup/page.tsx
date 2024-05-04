"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const Signup = () => {
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:""
    })
    const [loading,setLoading] = useState(false)
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const router = useRouter()
    
    const handleSubmit = async(e:any) =>{
        e.preventDefault()
        setLoading(true)
        try {
            setLoading(true)
            const res = await fetch('api/users/signup',{
                method:"POST",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(user),

            })
            router.push("/login")
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }finally{
          setLoading(false)
        }
    }
    useEffect(()=>{
     if(user.username.length>0 && user.email.length>0 && user.password.length>0 ){
      setButtonDisabled(false)
     }else{
      setButtonDisabled(true)
     }
    },[user])
   
  return (
    <>
    
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center min-h-screen py-4'>
    <h1 className='text-4xl'>{loading ? "Proccessing" : "Signup"}</h1>
  <label htmlFor="username">Username:</label>
  <input
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    id="username"
    type="text"
    value={user.username}
    onChange={(e) => setUser({...user, username: e.target.value})}
    placeholder="username"
  
  />
  <label htmlFor="email">Email:</label>
  <input
   className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
   id="email"
   type="text"
   value={user.email}
   onChange={(e) => setUser({...user, email: e.target.value})}
   placeholder="email"
  
  />
  <label htmlFor="password">Password:</label>
  <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password"
        
  />
  <button type="submit" className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none bg-[crimson] hover:bg-[#5e164f] '>{buttonDisabled ? "no Signup" : "Signup"}</button>
  <p>
    Already have an account? <Link href="/login " className='text-[#b8379a]'>Log in</Link>
  </p>
</form>

</>
  )
}

export default Signup