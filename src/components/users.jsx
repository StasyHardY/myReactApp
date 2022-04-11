import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";

import { paginate } from "./../utils/paginate";
import PropTypes from "prop-types";
const Users = ({ handleDelete, handleBookmark, users }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);
    return (
        <>
            <table className="table">
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
                    {userCrop.map((user) => {
                        return (
                            <User
                                key={user._id}
                                user={user}
                                handleBookmark={handleBookmark}
                                handleDelete={handleDelete}
                            />
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired
};

export default Users;