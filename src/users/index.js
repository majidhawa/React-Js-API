import { useGetusers } from "./hooks/useGetUser";
import UserCard from "../Atoms/UserCard";
import './index.css'
const Users=({IsloggedIn})=>{
    const {users,error,loading}=useGetusers();
    console.log({users});
return(
    <>
    {IsloggedIn ?
    <div className="users-page">
        {loading && <h2>Loading users ...</h2>}
        {error.length>0 && <h2>{error}</h2>}
        {users.length>0 ? users.map((user)=>(
                <UserCard 
                 key={user.id}
                image={user.image}
                fullName={`${user.firstName} ${user.lastName}`}
                age={user.age}
                gender={user.gender}
                address={user.email}/>
            )): !loading && <h2>No users found</h2>}
    </div>:
    <div className="error">
       
    </div>
}
    </>
    );
}
export default Users;









