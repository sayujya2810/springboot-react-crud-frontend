import React, { useState } from 'react'

const Search = () => {

  const [prodSearchByName, setProdSearchByName] = useState({})
  const [prodSearchById, setProdSearchById] = useState({})
  const [searchByName, setSearchByName] = useState("")
  const [searchById, setSearchById] = useState(0)

    const handleIdSearch = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8081/products/${searchById}`)
      .then((res) => res.json())
      .then(data => setProdSearchById(data))
      // .then(() => window.location.reload() )
  }
  const handleNameSearch = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8081/products/name/${searchByName}`)
      .then((res) => res.json())
      .then(data => setProdSearchByName(data))
      // .then(() => window.location.reload() )
  }
  return (
    <div style={{height:"100vh", paddingLeft:"10rem", paddingTop:"5rem"}}>

        <h1 style={{margin:"10px"}}>Search...</h1>
        <form onSubmit={handleIdSearch}>
          <input onChange={e => setSearchById(e.target.value)} type="number" placeholder='ID' style={{margin:"10px", padding:".75rem", borderRadius:"5px"}} />
          <button type='submit' style={{ borderRadius:"6px", padding:".75rem"}}>Search</button>

          <div style={{border:"2px solid #ff0088", borderRadius:"10px", margin:"10px", padding:"0rem 2rem 0rem 0rem", width:"50%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div className='left' style={{background:"#ff0088", padding:"3rem", maxWidth:"2rem", borderRadius:" 6px 0px 0px 6px", height:"inherit"}} >
              <h3>{prodSearchById.id}</h3>
            </div>
            <div className='right' style={{display:"flex", flexDirection:"column", width:"80%"}}>
              <p style={{borderBottom:"white 2px solid", paddingBottom:"2px", marginBottom:"10px"}}>{prodSearchById.name}</p>
              <p>{prodSearchById.description}</p>
            </div>
          </div>


        </form>
        <form onSubmit={handleNameSearch}>
          <input onChange={e => setSearchByName(e.target.value)} type="text" placeholder='Name' style={{margin:"10px", padding:".75rem", borderRadius:"5px"}} />
          <button  type='submit'style={{ borderRadius:"6px", padding:".75rem"}} >Search</button>          
        </form>
          <div style={{border:"2px solid #ff0088", borderRadius:"10px", margin:"10px", padding:"0rem 2rem 0rem 0rem", width:"50%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div className='left' style={{background:"#ff0088", padding:"3rem", maxWidth:"2rem", borderRadius:" 6px 0px 0px 6px", height:"inherit"}} >
              <h3>{prodSearchByName.id}</h3>
            </div>
            <div className='right' style={{display:"flex", flexDirection:"column", width:"80%"}}>
              <p style={{borderBottom:"white 2px solid", paddingBottom:"2px", marginBottom:"10px"}}>{prodSearchByName.name}</p>
              <p>{prodSearchByName.description}</p>
            </div>
          </div>
    </div>
  )
}

export default Search