import { useMemo, useState } from "react";

//perform filteration from array only when search value changes , and not on other re-rendering

const MemoHook = () => {
    const [search , setSearch] = useState("");
    const users = ["tannu" , "mannu" , "kishan" , "krish" , "monu" , "sonu" , "JANNU"]

    //only when search changes
    const filteredData = useMemo(() =>{
        if (search.trim() === "") return []; // empty search => no results

        return users.filter((user) =>{
            return user.toLowerCase().includes(search.toLowerCase())
        })
    } , [search])

    return (
        <div>
            <input type="text" onChange={(e)=>{setSearch(e.target.value)}}/>
            <ol>
                {filteredData.map((value,idx) => {
                    return <li key={idx}>{value}</li>
                })}
            </ol>
        </div>
    )
}

export default MemoHook;