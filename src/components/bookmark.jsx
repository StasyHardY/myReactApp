;


const BookMark =(user) => {
   return {...user, bookmark: !user.bookmark === true}
}

export default BookMark