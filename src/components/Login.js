import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth } from '../firebase'
import './Login.css'

export default function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleRegister = () => {
        if(!name) return alert("Please provide a full name!")

        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(() => {
                    dispatch(
                        login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        })
                    )
                })
            })
            .catch(error => alert(error.message))
    };

    const handleLogin = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profilePic: userAuth.user.photoURL,
                }))
            })
            .catch(error => alert(error.message))
    };

    return (
        <div className="login">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg" 
                alt=""/>
            <form>
                <input 
                    type="text" 
                    placeholder="Full name (required if registering)" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
                <input 
                    type="text" 
                    placeholder="Profile pic URL (Optional)"
                    value={profilePic}
                    onChange={(e)=>setProfilePic(e.target.value)}/>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" onClick={handleLogin}>Sign In</button>
            </form>
            <p>Not a member? 
                <span className="login__register" onClick={handleRegister}> Register Now</span>
            </p>
        </div>
    )
}
