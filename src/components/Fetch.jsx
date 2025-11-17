import React, { useState , useEffect } from 'react'

const Fetch = () => {
    const [data , setData] = useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => {
            return res.json();
        }).then((res) => {
            setData(res);
            console.log(res);
        })
    },[])

  return (
    <div>
      <h1>hello</h1>
      {data && <p>My name is {data.name} and id is {data.id}</p>}
    </div>
  )
}

export default Fetch
