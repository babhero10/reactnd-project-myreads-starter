import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {search} from './../BooksAPI';
import Books from './../components/Book'


function BookSearch(props) {

    const [foundedBooks, setFoundedBooks] = useState([])
    const [loadingFinding, setLoadingFinding] = useState("nothing")

    function onSearch(e) {
        const value = e.target.value;
        if (value!=='') {
            setLoadingFinding("loading");
            search(e.target.value)
            .then((res) => {
                setFoundedBooks(res);
                if (res.length) {
                    setLoadingFinding('done');
                } else {
                    setLoadingFinding('noData');
                }
            })
        } else {
            setFoundedBooks([]);
            setLoadingFinding("nothing")
        }
    }

    function loadFoundBooks() {
        let shelf = "none";
        let bookFound = [];
        for (let bookI in foundedBooks) {
            shelf = 'none'
            for (let i = 0; i < props.shelfedBooks.length; i++) {
                if (foundedBooks[bookI].id === props.shelfedBooks[i].id) {
                    shelf = props.shelfedBooks[i].shelf;
                    break;
                }
            }
            bookFound.push(<li key={foundedBooks[bookI].id}><Books book={foundedBooks[bookI]} shelf={shelf} onSheilfChange={props.onSheilfChange}/></li>)
        }
        return bookFound;
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
            <Link to="/"><button className="close-search">Close</button></Link>
            <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={onSearch}/>
            </div>
            </div>
            <div className="search-books-results">
            {
                (loadingFinding==="loading") ? <p>Loading...</p> 
                : (loadingFinding==="nothing") ? <p>Type the title of the book or the name of the author</p> 
                : (loadingFinding ==="noData") ? <p>Can't find any books</p>
                : (loadingFinding === "done") ? <ol className='books-grid'>{loadFoundBooks()}</ol>
                : <p>Can't find any books</p> 

            }
            <ol className="books-grid">
                
            </ol>
            </div>
        </div>
    )
}

export default BookSearch;