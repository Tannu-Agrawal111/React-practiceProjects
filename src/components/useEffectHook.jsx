import {useState , useEffect} from 'react'

const EffectHook = () => {
  const [count , setCount] = useState(0);

  const [seccount , setseccount] = useState(0)
  
  // we want everytime react re-renders , the count is printed(no dependency array)

  useEffect(()=>{
    console.log(count);
  })

    //empty dependancy array --> when react is mounted/rendered for 1st time  (example - API call)

  //   useEffect(()=>{
  //   console.log(count);
  // },[])


    //when dependancy array contains value --> for particular dependancy change , effect should be handled

    //   useEffect(()=>{
  //   console.log(count);
  // },[count])






  // useEffect(()=>{
  //   const myInterval = setInterval(()=>{
  //     console.log("tannu")
  //   },9000)

  //   return () =>{
  //     clearInterval(myInterval);
  //   }
  // },[])


  // useEffect(()=>{
  //   function handleScroll(){
  //     console.log("scrolled")
  //   }

  //   window.addEventListener("scroll" , handleScroll);

  //   return ()=>{
  //     window.removeEventListener("scroll" , handleScroll)
  //   }
  // },[])



  //IN CASE OF adding EVENT LISTENER to jsx element
  //see useRef hook + useeffect hook

  return (
    <div>
      <h1>useeffect hook</h1>
      <button onClick={()=>{setCount(count+1)}}>inc</button>
      <button onClick={()=>{setseccount(seccount+1)}}>inc</button>
      <br /> <br />
      <hr /> 
    </div>
  )
}

export default EffectHook;


//USEEFFECT HOOK + ASYNC-AWAIT

// import { useEffect, useState } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) {
//           throw new Error("Failed to fetch");
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUsers(); // call async function inside useEffect
//   }, []); // empty dependency → runs only once

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>Error: {error}</h2>;

//   return (
//     <div>
//       <h1>User List:</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name} — {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Users;
