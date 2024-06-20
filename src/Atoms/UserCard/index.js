const UserCard=({image,fullName,age,gender,address})=>{
    return(
        <div>
            <img src={image} alt={`${fullName} profile`}/>
            <h2>{fullName}</h2>
            <h2>{age}</h2>
            <h2>{gender}</h2>
            <h2>{address}</h2>
        </div>
    );
};
export default UserCard;