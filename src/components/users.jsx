import React, {useState} from "react"
import User from "./user"

const Users = ({handleDelete,handleBookmark, users}) => {

    return (
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
                    {users.map((user) => {
                        return <User user={user} handleBookmark={handleBookmark} handleDelete={handleDelete} />
                    })}
                </tbody>
            </table>
    )
}
export default Users