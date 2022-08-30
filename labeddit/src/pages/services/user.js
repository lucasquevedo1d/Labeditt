import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/Urls'
import { irParaFeed } from '../routes/Cordinator'

 export const login = (body, clear, navigate, setLoading) =>{
    setLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) =>{
        
        localStorage.setItem("token", res.data.token)
        irParaFeed(navigate)
        setLoading(false)
        clear()
    })
    .catch((err) =>{
        setLoading(false)
        alert('erro')})
    
}

export const cadastrar = (body, clear, navigate, setLoading) =>{
    setLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) =>{
        
        localStorage.setItem("token", res.data.token)
        irParaFeed(navigate)
        setLoading(false)
        clear()
    })
    .catch((err) =>{
        setLoading(false)
        alert('erro')})
    
}