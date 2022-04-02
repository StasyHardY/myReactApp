import React, {useState} from "react";
import api from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import BookMark from "./components/bookmark";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())
    
    const handleDelete = (id) => {
      setUsers(prevState => prevState.filter(user => user._id!== id))
    }

    const handleBookmark = (id) => {
      const newUsers = users.map(user => {
         if(user._id === id) {
             return {...user, bookmark: !user.bookmark === true}
         } 
         return {...user}
   })
   setUsers(newUsers)
    }
    return (
        <>
             <SearchStatus count={users.length}/>
            <Users
                users={users}
                handleDelete={handleDelete}
                handleBookmark={handleBookmark}
            />
        </>
    );
}

export default App;