import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Routes, Route } from 'react-router-dom';



function App() {

const [searchResults, setSearchResults] = useState([]);
const [searchText, setSearchText] = useState('');

useEffect(() => {

  if(searchText) {
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTI1ZjI3NTY1NTg4M2MzYjc0Nzc5Nzc3NjEyM2YxZiIsInN1YiI6IjY0ZDgxMjFjMzcxMDk3MDEzOTQ0OGJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l55u8skK_x9yfVtclD42R3bnttFbBoIBjxs6PnnIubA'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=8525f275655883c3b747797776123f1f&query=${searchText}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setSearchResults(data.results)
      })
  }
    // .then(data => console.log(response))
    // .catch(err => console.error(err));
}, [searchText])


  return (
    <div>

      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/about' Component={AboutView} />
        <Route path='/search' element={<SearchView keyword={searchText} searchResults={searchResults}/> } />
        <Route path='/movies/:id' Component={MovieView} />
      </Routes>
    </div>
  );
}

export default App;
