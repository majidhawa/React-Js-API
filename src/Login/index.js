import './index.css'
import { useState } from 'react';
import { login } from './utils';
const Login = () =>{
    const [username,setUserName]=useState('');
    const [password, setPassword]=useState('');
    const handleLogin = async(event)=>{
        event.preventDefault();
        const result = await login({username,password});
        console.log({result});
    };
    return(
        <div>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
            <input placeholder="Enter Username" type="text" onChange={(event)=>setUserName(event.target.value)}/>
            <br></br>
            <input placeholder="Enter Password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
            <br></br>
            <button type='submit'>Login</button>
            </form>
        </div>
    )
}
export default Login