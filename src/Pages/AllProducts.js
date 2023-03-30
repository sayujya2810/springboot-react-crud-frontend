import React, { useEffect, useState } from 'react'

const AppProducts = () => {

    const [products, setProducts] = useState([])

      useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then(data => setProducts(data))
  },[])


    const deleteSubject = (_id) => {
        fetch(`http://localhost:8081/products/${_id}`, {
        method:"DELETE"
        }
        ).then(() => window.location.reload() )
    } 
  return (
    <div style={{ paddingTop:"1rem", display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center" }}>
        <h1  style={{margin:"10px"}}>Servers</h1>
      <div>
        {products.map((product) =>  (
          <div style={{border:"2px solid #ff0088", borderRadius:"10px", margin:"10px", padding:"0rem 2rem 0rem 0rem", width:"50%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div className='left' style={{background:"#ff0088", padding:"3rem", maxWidth:"2rem", borderRadius:" 6px 0px 0px 6px", height:"inherit"}} >
              <h3>{product.id}</h3>
            </div>
            <div className='right' style={{display:"flex", flexDirection:"column", width:"50%"}}>
              <p style={{borderBottom:"white 2px solid", paddingBottom:"2px", marginBottom:"10px"}}>{product.name}</p>
              <p>{product.description}</p>
            </div>
            <button style={{ borderRadius:"6px", maxHeight:"3rem", padding:"1rem"}} onClick={e => deleteSubject(product.id)}>DELETE</button>
          </div>

        ))}
      </div>
    </div>
  )
}

export default AppProducts