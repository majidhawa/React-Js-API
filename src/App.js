import { useState } from "react";
import Login from "./Login";
import Users from "./users";
import './App.css'
export const Introduction=({setModalIsOpen})=>{
  const openModel=()=>{
    setModalIsOpen(true)
  }
  return(
    <>
    <button className="login" onClick={openModel}>Click Me</button>
    </>
  )
}
const App=() =>{
  const [IsloggedIn,setIsLoggedIn]=useState(false)
  return(
    <div>
   <Login setIsLoggedIn={setIsLoggedIn}/>
   <Users IsloggedIn={IsloggedIn} />
    </div>
  );
}
export default App;









