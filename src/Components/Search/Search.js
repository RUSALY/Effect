import React, {useState} from 'react';

import "./Search.css";
import { BiSearch } from 'react-icons/bi';



const Search = ({setUsername}) => {

  const [userInput, setUserInput] = useState('')
  
  const getdata =(event)=>{
    setUserInput(event.target.vlaue)


  }
  const getInputdata=(event)=>{
    event.preventDefault()
    setUsername(userInput)                                    
  }



    return (
      
         <div className="search">
            <form onSubmit={getInputdata} > 
              <BiSearch/>
              <input onChange={getdata} value={userInput} type="text" />
              <button   type='submit'>Search</button>
            </form>
          </div>
          

  );
    
};

export default Search;