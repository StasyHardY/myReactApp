import PropTypes from "prop-types";

const BookMark = (user) => {
    return { ...user, bookmark: !user.bookmark === true };
};

BookMark.propTypes = {
    user: PropTypes.object.isRequired
};

export default BookMark;
