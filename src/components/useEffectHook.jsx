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
      <button onClick={()=>{setCount(count+1)}}>inc</button>
      <button onClick={()=>{setseccount(seccount+1)}}>inc</button>
      <hr />
    </div>
  )
}

export default EffectHook;
