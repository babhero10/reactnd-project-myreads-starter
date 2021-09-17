import React from "react";

function CurrentlyRead(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.renderBooks("currentlyReading")}
                </ol>
            </div>
        </div>
    )
}

export default CurrentlyRead;