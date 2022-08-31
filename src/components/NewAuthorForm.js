import React from 'react'
import {useState} from 'react'

const NewAuthorForm = ({addAuthor, handleSubmit}) => {
  const [newAuthor, setNewAuthor] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const newAuth = {
      author: {
        newAuthor: newAuthor,
        published: false
      }
    }
    fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newAuthor)
  })
      .then(r => r.json())
      .then(data => console.log(data))
  }
  return (
    <div>
  
  <form onSubmit={handleSubmit}>
    
         <label>
        Author Name:
        <input  onChange={(e) => setNewAuthor(e.target.value)}
          className="input"
          type="text"
          placeHolder="Add a new Author"
          name="author-name"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        ></input>
        <button>Submit Form</button>
      </label>
      </form>
    </div>
  )
}

export default NewAuthorForm