import './index.css';
import { useState } from 'react';
import { login } from './utils';
import { Introduction } from '../App';

const Login=({setIsLoggedIn})=>{
    const [username,setUserName]=useState('');
    const [password, setPassword]=useState('');
    const [openModel,setModalIsOpen]=useState(false);
    // console.log({username});
    const handleLogin=async(event)=>{
     event.preventDefault();
        const result=await login({username,password});
        console.log({result});
        if(result.token){
            localStorage.setItem('token',result.token)
            setIsLoggedIn(true)
            setModalIsOpen(false)
        }
    };
    return(
        <div>
            <Introduction setModalIsOpen={setModalIsOpen}/>
            {openModel && <form onSubmit={handleLogin}>,
    <h2>Login</h2>
    <input placeholder="Enter username" type="text" onChange={(event)=>setUserName(event.target.value)}/>
    <br/>
    <input placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
    <br/>
    <button type="submit">Login</button>
</form>}
        </div>
    )
}
export default Login;









