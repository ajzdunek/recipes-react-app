import React, {useEffect, useState, Component} from 'react';
// import logo from './logo.svg';
import Recipes from './Recipes'
import NavBar from './components/NavBar'
// import Footer from './components/Footer'

import './App.css';




const App = () => {


  const APP_ID = 'a02699c1';
  const APP_KEY = '520002ee3a33209a319d3f8eb5308771';
  // const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);

   // ---------------------------------------

  const [search, setSearch] = useState('');

  // ---------------------------------------

  const [query, setQuery] = useState('')

  // ---------------------------------------
  
  useEffect(() => {

   getRecipes();

  }, [query])

  // ---------------------------------------

    const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  } 

 // ---------------------------------------

 const updateSearch = e => {
   setSearch(e.target.value)
 }

 const getSearch = e => {
   e.preventDefault();
   setQuery(search);
   setSearch('');
 }



  return (

    
    <div className="App">

    <NavBar />

      <form onSubmit={getSearch} className="search-form">
    
        <input className="search-bar" type="text" placeholder="Search Recipes" value={search} onChange={updateSearch}/>

          <button className="search-button" type="submit">Search</button>
    
      </form>


    <div className='recipes'>

    {recipes.map(recipe =>(

      <Recipes 

      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image} 
      ingredients={recipe.recipe.ingredients} />

    ))}

    </div>
    </div>
  )
}



export default App;


