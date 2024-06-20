import { useState } from "react";
import Login from "./Login";
import Users from "./users";
export const Introduction=({setModalIsOpen})=>{
  const openModel=()=>{
    setModalIsOpen(true)
  }
  return(
    <>
    <button className="login" onClick={openModel}>Log in</button>
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









