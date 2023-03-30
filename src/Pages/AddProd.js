import React, { useState } from 'react'

const AddProd = () => {
    const [id, setId] = useState()
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")

    

      const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:8081/products", {
      method:"POST",
      body:JSON.stringify({
        id: id,
        name:name,
        description: desc
      }),
      headers:{
        "Content-type":"application/json; charset=UTF-8"
      }
    })
    .then(() => window.location.reload())
  }

  return (
    <div>
        <div>
            <form style={{ display:"flex", flexDirection:"column", width:"100%", justifyContent:"centre", alignItems:"center", height:"88vh", marginTop:"6rem"}} onSubmit={handleSubmit}>
                <h1 style={{borderBottom:"2px solid white", width:"40%", textAlign:"center", marginBottom:"10px"}}>FORM</h1>
                <input style={{borderRadius:"6px",padding:"1rem", width:"30%", margin:".4rem"}} onChange={e => setId(e.target.value)} type="number" placeholder='id' />
                <input style={{borderRadius:"6px",padding:"1rem", width:"30%", margin:".4rem"}} onChange={e => setName(e.target.value)} type="text" placeholder='name' />
                <input style={{borderRadius:"6px",padding:"1rem", width:"30%", margin:".4rem"}} onChange={e => setDesc(e.target.value)} type="text" placeholder='description' />
                <button style={{borderRadius:"6px", width:"10%", padding:".75rem", margin:".4rem"}} type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddProd