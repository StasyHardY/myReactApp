import React from "react";
import PropTypes from "prop-types";
const SearchStatus = ({ count }) => {
    return (
        <h1 className={count === 0 ? "badge bg-danger" : "badge bg-primary"}>
            {" "}
            {count === 0
                ? `Никто с тобой не тусанет`
                : ` ${count} человек тусанет с тобой сегодня`}{" "}
        </h1>
    );
};

SearchStatus.propTypes = {
    count: PropTypes.number.isRequired
};

export default SearchStatus;
