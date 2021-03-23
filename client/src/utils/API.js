import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Google books API
  searchBook: (query) => {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q='+ query);
  },
  // Gets the book with the given id
  getBook: (id) => {
    return axios.put('/api/books/' + id);
  },
  // Deletes the book with the given id
  deleteBook: (id) => {
    return axios.delete('/api/books/' + id);
  },
  // Saves a book to the database
  saveBook: (data) => {
    return axios.post('/api/books', data);
  },
};
