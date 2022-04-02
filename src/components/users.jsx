import React, {useState} from "react"
import api from '../api'


const Users = () => {
    
    const [users, setUsers] = useState(api.users.fetchAll())
    
    const peopleLeft=() => {
       
         return <h1 className={users.length === 0 ? "badge bg-danger" : "badge bg-primary"} > {users.length === 0 ? `Никто с тобой не тусанет` : ` ${users.length} человек тусанет с тобой сегодня` }  </h1>
    }
        
    const handleTag=(id) => {
        
        setUsers(prevState => prevState.filter(user => user._id!== id))
    }

    const handleToggleBookMark = (id) => {
        
        const newUsers = users.map(user => {
            if(user._id === id) {
                return {...user, bookmark: !user.bookmark === true}
            } 
            return {...user}
      })
      
      setUsers(newUsers)
      }
    
    const renderAll = () => {
        return users.map(user => {
            return <tr className="bg" key={user._id}>
                <td>{user.name}</td>
                <td>{user.qualities.map(qualities => {
                    return <span className={`badge bg-${qualities.color} m-1 `} key={qualities._id}>{qualities.name} </span>
                })}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td><span  className={`bi bi-suit-heart${user.bookmark ? "-fill" : ""}`} onClick={() => handleToggleBookMark(user._id)}/></td> 
                <td><button className="btn btn-danger" onClick={() => handleTag(user._id)}>Удалить</button></td>
            </tr>
        })
    }
    return (
        <>
         {peopleLeft()}
        
            <table className='table'>
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                </tr>
                </thead>
                <tbody>
                    {renderAll()}
                </tbody>
            </table>
        </>
    )
}
export default Users