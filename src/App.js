import React ,{useEffect, useState} from 'react';
import './App.css';


const App = () => {
   const APP_ID = "389c00b3";
   const APP_KEY = "3a1f83537734b484f6f633145912ef6b";
  
   const [recipes, setRecipes] = useState([]);

   
   useEffect(() =>{
     getRecipes();
   },[]);

//fetches all our data
const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json()
  setRecipes(data.hits);

}
 return(
   <div className="App">
     <form className="search-form">
       <input  className="search-bar" type="text"/>
       <button 
       className="search-button" type="submit">Search</button>
     </form>
     
   </div>
 );
};

export default App;
