import React from "react";

function WantToRead(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.renderBooks("wantToRead")}
                </ol>
            </div>
        </div>
    )
}

export default WantToRead;