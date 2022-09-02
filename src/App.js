import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search/Search';
import Card from './Components/Card/Card';
import User from './Components/USER/User';
import React, { useState} from 'react';



function App() {
   const [username, setUsername]= useState (`AhnabShahin`)
   const [user, setUser] = useState ({})



  return (
    <>
    <Search setUsername={setUsername}/>
    <Card user={user} setUser={setUser}/>
    <User username={username} user={user} setUser={setUser}/>
    </>
  )
}

export default App;
