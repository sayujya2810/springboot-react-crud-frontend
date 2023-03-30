import './App.css';
import {useEffect, useState} from "react"
import axios from "axios"
import AllProducts from './Pages/AllProducts';
import AddProd from './Pages/AddProd';
import Search from './Pages/Search';

function App() {

  const [nav, setNav] = useState("allprod")

  return (
    <div className="App" style={{backgroundColor:"black", height:"auto", color:"white", paddingBottom:"2rem"}}>
      <nav style={{position:"static", backgroundColor:"#ff0088", padding:"1rem", display:"flex", justifyContent:"center",}}>
        <button style={{ fontSize:"20px",cursor:"pointer",backgroundColor:"#ff0088", border:"none", color:"white", marginLeft:"10px", marginRight:"10px"}} onClick={e => setNav("allprod")}>All Server</button>
        <button style={{ fontSize:"20px",cursor:"pointer",backgroundColor:"#ff0088", border:"none", color:"white", marginLeft:"10px", marginRight:"10px"}} onClick={e => setNav("search")}>Search</button>
        <button style={{ fontSize:"20px",cursor:"pointer",backgroundColor:"#ff0088", border:"none", color:"white", marginLeft:"10px", marginRight:"10px"}} onClick={e => setNav("addprod")}>Add Server</button>
      </nav>
      {nav === "allprod" ? <AllProducts /> : null}
      {nav === "addprod" ? <AddProd /> : null}
      {nav === "search" ? <Search /> : null}
    </div>
  );
}

export default App;
