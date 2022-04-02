import React from "react";
import Qualitie from "./qualitie";

const User = ({user, handleDelete, handleBookmark}) => {
   return <tr className="bg" key={user._id}>
   <td>{user.name}</td>
   <td>{user.qualities.map(qualities => {
       return <Qualitie key={qualities._id} color={qualities.color}  name={qualities.name} />
   })}</td>
   <td>{user.profession.name}</td>
   <td>{user.completedMeetings}</td>
   <td>{user.rate}</td>
   <td><span  className={`bi bi-suit-heart${user.bookmark ? "-fill" : ""}`} onClick={() => handleBookmark(user._id)}/></td> 
   <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Удалить</button></td>
</tr>
}

export default User