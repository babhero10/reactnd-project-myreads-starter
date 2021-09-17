import React from "react";

function Read(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.renderBooks("read")}
                </ol>
            </div>
        </div>
    )
}

export default Read;