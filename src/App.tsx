import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormComponent from './Components/FormComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import MainComponent from './Components/MainComponent';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Book from './Types/Book';


function App() {

  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const getBooks = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/food-books")
      console.log(response)
      let data = await response.json() as Book[]
      console.log(data)
      setBooks(data)
    } catch (error) {}
      
    }
    getBooks()
  },[]);

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <MainComponent title="hello again"/>
        <MainComponent title="and again" subTitle="Really?"/>
        <Route path="/" component={MainComponent}/>
        <FunctionalComponent title="Click Me!"/>

        <Route path="/form" render={(routerProps) => <FormComponent {...routerProps} user="Kristian" books={books}/>}/>
      </header>
    </div>
    </Router>
  );
}

export default App;
