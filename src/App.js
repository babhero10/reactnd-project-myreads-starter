import React, {useEffect, useState} from 'react'
import './App.css'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BookShelf from './pages/BookShelf';
import BookSearch from './pages/BookSearch';
import Books from './components/Book';
import {getAll, update} from './BooksAPI';

function BooksApp() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      getAll().then(
          (res) => {
              setBooks(res);
              setLoading(false)
          }
      )
  }, [])
  
  const onSheilfChange = (e, book) => {
      const shelfValue = e.target.value;
      
      update(book, shelfValue).then(()=> {
          
          setBooks(prevBook => {
              let newBooks = [...prevBook];
              
              let found = false;
              
              for (let i = 0; i < prevBook.length; i++) {
                  if (newBooks[i].id === book.id) {
                      newBooks[i].shelf = shelfValue;
                      found = true;
                      break;
                  }
              }

              if (!found) {
                newBooks.push(book);
              }

              return newBooks;

          });
      });
  }

  function renderBooks(currentShelf) {
      return (
          loading ? 
          "Loading..." :
          books.filter(book => book.shelf === currentShelf || currentShelf==='search')
          .map((book) => <li key={book.id}><Books book={book} shelf={book.shelf} onSheilfChange={onSheilfChange}/></li>)
      )
  }

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <BookShelf renderBooks={renderBooks} />
          </Route>
          <Route path='/search'>
            {loading ? 
            <p>Loading...</p>
            :
            <BookSearch onSheilfChange={onSheilfChange} shelfedBooks={books} />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default BooksApp
