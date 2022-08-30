import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) =>{
    const [data, setData] = useState(initialData)
    const getData = () =>{
        axios.get(url, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) =>{
            setData(response.data)
        })
        .catch((err) =>{
            console.log(err)
            alert("Erro")
        })
    }
    useEffect(() =>{
getData()
    }, [])
    return [data, getData]
}
export default useRequestData