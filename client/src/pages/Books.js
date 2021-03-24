import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})




  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
    // console.log(formObject)
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    API.getBook(formObject.title)
      .then(res => {
        setBooks(res.data.items)
        console.log(res)}
      )
      .catch(err => console.log(err));
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Search?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
               
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <div>
                    <h1>
                      {book.volumeInfo.title}
                      </h1>
                      <h2>
                      by {book.volumeInfo.authors}
                      </h2>
                         
                        <br></br>
                        <p>
                        {book.volumeInfo.description}
                        </p>
                        <img alt={book.volumeInfo.imageLinks.smallThumbnail}>
                        </img>
                        <a href={book.volumeInfo.selfLink}>
                        </a>
                        <p>
                        {book.volumeInfo.id}
                        </p>
                          
                    </div>
                    <Link to={"/books/" + book._id}>
                     
                     
                    </Link>
                    {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
