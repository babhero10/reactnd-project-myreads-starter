import { Link } from 'react-router-dom';
import React from 'react'
import CurrentlyRead from '../components/CurrentlyRead'
import WantToRead from '../components/WantToRead'
import Read from '../components/Read'

export default function BookShelf(props) {

    
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <CurrentlyRead renderBooks={props.renderBooks} />
                <WantToRead renderBooks={props.renderBooks} />
                <Read renderBooks={props.renderBooks} />
            </div>
            </div>
            <div className="open-search">
            <Link to="/search"><button>Add a book </button></Link>
            </div>
        </div>
    )
}