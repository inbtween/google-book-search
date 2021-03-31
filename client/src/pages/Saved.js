import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        API.getSavedBooks()
            .then(res => {
                this.setState({
                    books: res.data
                })
            }).catch(err => console.log(err))
    };

    handleBookDelete = id => {
        API.deleteBook(id)
            .then(res => {
                this.getBooks()
            })
    }
    render() {



        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Search for your favorite books</h1>
                        </Jumbotron>

                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Books On My List</h1>
                        </Jumbotron>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
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
                                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book cover image" height={200} width={150} />

                                            <a href={book.volumeInfo.infoLink}>
                                                Go to book </a>
                                            <p>
                                                {book.volumeInfo.id}
                                            </p>
                                        </div>
                                        <Link to={"/books/" + book._id}>

                                        </Link>
                                        <DeleteBtn onClick={() => this.handleBookDelete(book._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
            </Container >
        );
    }
}


export default Saved;
