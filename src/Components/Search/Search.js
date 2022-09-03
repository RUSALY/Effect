import React, {useState} from 'react';
import { Container } from 'react-bootstrap';

import "./Search.css";
import { BiSearch } from 'react-icons/bi';
import search from "../../Assets/search.jpg"



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
      
         <Container>
          <div className="search" >
             <form onSubmit={getInputdata} > 
               <BiSearch/>
               <input onChange={getdata} value={userInput}  type="text" />
               <button   type='submit'>Search</button>
             </form>
           </div>
         </Container>
          

  );
    
};

export default Search;