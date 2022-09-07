import "./App.css";
import { useEffect, useState } from "react";
import BookCards from "./components/BookCards";
import NewAuthorForm from './components/NewAuthorForm'



// "http://localhost:3001"
function App() {
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState("https://randomfox.ca/images/41.jpg")
  const [likes, setLikes] = useState(0)
  const [newsLetter, setNewsletter] = useState(true)
 

  useEffect(() => {
    fetch("http://localhost:3001/books", {})
      .then((r) => r.json())
      .then((books) => setBooks(books));
  }, []);
  
  console.log(books)

  const filteredPrices = books.filter((book) => { 
    return book.price <= 10 
  })
  // console.log(filteredPrices)

  const prices = books.map((book) => {
    return book.price
  })
  // console.log(prices)

  const find = books.find((book) => {
    return book.title === "Harry Potter and the Chamber of Secrets"
  })
  // console.log(find)
    
// const totalSum = books.reduce((currentTotal, book) => {
//   console.log( book.price + currentTotal)
// }, 0)
// console.log(totalSum)

// const totalSum = books.

  

  function handleNewFoxClick() {
    fetch("https://randomfox.ca/floof/")
    .then((r)=> r.json())
    .then(({image}) => { setImage(image)
      setLikes(0)

    })
  }

  function handleLikes() {
    setLikes(likes + 1)
  }

  function handleClick() {
    console.log("I've been clicked!")
    setCount(count + 1)
    console.log(count)
  }

  // let newBooksArr=[...books + "Plus another one"]
  // console.log(newBooksArr)

  // console.log(books);
  // const book = books.map((book) => <p>{book.title}</p>)
  const bookCards = books.map((book) => (
    <BookCards book={book} books={books} />
  ));

  const reducer = (accumulator, item) => {
    // console.log(accumulator)
    let total = item.price * item.inventory;
    return (accumulator += total);
  };

  let total = books.reduce(reducer, 0);
  // console.log(total);

  let foundBook = books.find(stockFirst);

  function stockFirst(book) {
    return book.inventory < 10;
  }
  // console.log(foundBook);

  function addAuthor(newAuthor) {
    const updatedList = [...books, newAuthor]
    setBooks(updatedList)
  }
 
//  const names =['Bailey, Charlie, Shay, Atticus']

//  for(let i = 0; i < names.length; i++){
//    console.log(names[i])
//    if(i ===3) break
   
//  }
//  const user = {'firstname':'shay', 'lastName':'Allison'}
//  for(key in user) console.log(user[key]);

//  let i=0; while(1<10) {
//    console.log(i);
// i++;
//  }



const message = (a,b) => `Hello ${a}, You are ${b}`
// console.log(message('Shay', 'awesome"'))

let greeting = (pn) => console.log(`Hello ${pn}`)
const userInfo=(callback, fName, lName) => {
  const fullName = `${fName} ${lName}`
  callback(fullName)
}
userInfo(greeting, 'Bailey', 'Wacker')

function handleChange(e) {
  console.log(e.target.value)
}

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Ive been submitted")
  }
  

  return (
    <div className="">
    <NewAuthorForm handleSubmit={handleSubmit} addAuthor={addAuthor}/>
      {bookCards}

      <h1>Total: {total}</h1>
      <h4>
        Stock First: <br /> {foundBook?.title}
      </h4>
      <button onClick={handleClick}>Clicks: {count}</button>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="type something"></input>
        <button>Submit Form</button>
        <label>
        Get Our Newsletter!
        <input
          type="checkbox"
          id="newsletter"
          checked={newsLetter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
      </label>
        
      </form>
      <h1>🦊 FoxFindr 🦊</h1>
      <button onClick={handleNewFoxClick}>New 🦊 Please</button>
      <img src={image} height="150" width="150"/>
      <button onClick={handleLikes}>Likes: {likes}</button>
      
      
      {/* <div>{newBooksArr}</div> */}
    </div>
  );
}

export default App;
