// import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";

// function Saved() {
//   // Setting our component's initial state
//   const [savedBooks, setSavedBooks] = useState([])
//   const [formObject, setFormObject] = useState({})



//   componentDidMount() {
//     this.getBooks();
//   }

//   getBooks = () => {
//     axios.delete("/api/books/")
//       .then(res => {
//         setSavedBooks(res.data.items)
//         console.log(res)}
//       )
//       .catch(err => console.log(err));
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   deleteBook = id => {
//     console.log(id);
//     axios.delete("/api/books/" + id)
//       .then( () => {
//         ("delete book");
//         this.getBooks()
//         })
//       .catch(err => console.log(err));
//   };

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>Search for your favorite books</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <FormBtn
//                 onClick={handleFormSubmit}>
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {savedBooks.length ? (
//               <List>
//                 {savedBooks.map(book => (
//                   <ListItem key={book._id}>
//                     <div>
//                     <h1>
//                       {book.volumeInfo.title}
//                       </h1>
//                       <h2>
//                       by {book.volumeInfo.authors}
//                       </h2>
                         
//                         <br></br>
//                         <p>
//                         {book.volumeInfo.description}
//                         </p>
//                         <img src={book.volumeInfo.imageLinks.thumbnail} alt="book cover image" height={200} width={150}/>
                        
//                         <a href={book.volumeInfo.infoLink}>
//                           Go to book
//                         </a>
//                         <p>
//                         {book.volumeInfo.id}
//                         </p>
//                     </div>
//                     <Link to={"/books/" + book._id}>
                     
//                     </Link>
//                     {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Saved;
