//make a controlled login form with
//email , password
//show errors if fields are empty
//else show name annd email on para
//CONDITIONAL RENDERING

//validation for password match

import { useState } from "react"

function LoginForm(){
    const [input , setinput] = useState({fullname:"" , email:"" , password:"" , confirmpassword:""});

    const [errmsg , seterrmsg] = useState("");

    function handlechange(e){
        setinput((prevval)=>{
            return {...prevval , [e.target.name] : e.target.value}
        })
    }

    function handlesubmit(e){
        e.preventDefault();
        if(input.fullname == "" && input.email == "") {
            seterrmsg("enter name and email");
        }
        else if(input.fullname == ""){
            seterrmsg("enter name ");
        }
        else if(input.email == ""){
            seterrmsg("enter email");
        }
        else{
            seterrmsg("");
        }

        if (input.password === "" || input.confirmpassword === "") {
            seterrmsg((prevval)=>{
                return prevval + " , please enter password"
            })
        } else if (input.password !== input.confirmpassword) {
            seterrmsg((prevval)=>{
                return prevval + " , passwords do not match"
            })
        }
    }

    return (
        <div>
            <hr />
            
            <h1>controlled form</h1>

            <p>
                {errmsg !== "" ? errmsg : `${input.fullname} ${input.email}`}
            </p>

            <form onSubmit={handlesubmit}>
                <label htmlFor="fullname">Enter name</label>
                <input type="text" name="fullname" value={input.name} onChange={handlechange}/>

                <label htmlFor="email">Enter email</label>
                <input type="email" name="email" value={input.email} onChange={handlechange}/>

                <br /><br />

                <label htmlFor="password">Enter password</label>
                <input type="password" name="password" value={input.password} onChange={handlechange}/>

                <label htmlFor="password">Enter password</label>
                <input type="password" name="confirmpassword" value={input.confirmpassword} onChange={handlechange}/>

                <button type="submit">submit</button>
            </form>
            <br /><hr />
        </div>
    )
}

export default LoginForm;


