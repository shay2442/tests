
import React from 'react'

const BookCards = ({book, books}) => {
    const {image, title, genre, price, inventory} = book
    // console.log(books)

  return (
    <div>
        <div>
         <img
         className="image"
        src={book.image}
        alt="No Pic"
        height="200"
        width="280"
          />
    </div>
    <div>
            <strong>Title: {title}</strong>
          </div>
          <div>
            <strong>Genre: {genre}</strong>
          </div>
          <div>
            <strong>Price: {price}</strong>
          </div>
          <div>
            <strong>Inventory: {inventory}</strong>
          </div>
         
        
    </div>
  )
}

export default BookCards