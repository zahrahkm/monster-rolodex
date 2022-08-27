import React, {useEffect, useState} from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

const App =()=> {
    console.log('render')
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [filterMonsters,setFilterMonsters]=useState(monsters)

/////////////useEffect///////////

    useEffect(()=>{
        console.log('effect fired')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>setMonsters(users))
    },[])

    useEffect(()=>{
        const newFilterMonsters=monsters.filter(monster =>{
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        });
        setFilterMonsters(newFilterMonsters);

    },[monsters,searchField])

//////////////////////    ///////////////////
    const handelChange=(e)=>{setSearchField( e.target.value.toLowerCase())}


    return (
        <div className="App">
            <h1>Monster Rolodex</h1>
            <SearchBox placeholder='search monster' handelChange={handelChange}/>
            <CardList monsters={filterMonsters}/>
        </div>
    );
}

export default App;
