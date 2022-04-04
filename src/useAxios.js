import React, { useEffect, useState } from 'react'
import axios from 'axios';
function useAxios() {
    const [response,setResponse]=useState([]);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        const getAxios=()=>{
            setLoading(true)
            axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res=>setResponse(res.data))
            .catch(error=>setError(error))
            .finally(setLoading(false));
        }
        getAxios();

    },[])
    console.log(response);
    
    return {response,loading}
}

export default useAxios