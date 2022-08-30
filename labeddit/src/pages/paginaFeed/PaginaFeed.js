import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/Urls'
import useProtectPage from '../../Hooks/UseProtectPage'
import useRequestData from '../../Hooks/useRequestData'
import { irParaPost } from '../routes/Cordinator'
import { BotaoCriarPost, CardFeed, Form, PlaceButton, Placecard } from './StylesFeed'
import {Button, TextField} from '@material-ui/core/'
import useForm from '../../Hooks/Hooks'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'


const PaginaFeed = () => {
    useProtectPage()
    const navigate = useNavigate()
    const [feed, getPost] = useRequestData([], `${BASE_URL}/posts`)
    const [form, onChange, clear] = useForm({title:"", body:""})
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem("token")

    const createPost = () =>{
        setLoading(true)
        axios.post(`${BASE_URL}/posts`, form,{
            headers:{
                Authorization: token

            }
           
        })
        .then((res) =>{ 
            getPost()
            setLoading(false)
            clear ()
        })

        .catch((err) => {
            setLoading(false)
            alert(err.response.message)})
    
    }


    const vote = (vote,id) =>{
        const url = `${BASE_URL}/posts/${id}/votes`
        const body = {
            direction:vote,
        }
        const headers = {
        headers : {
            Authorization: localStorage.getItem("token")
        }
    }
    axios.post(url, body, headers)
    .then((res) => {
        getPost()
        })
    .catch((err) => console.log(err))
    }
    
    const onSubmitPost = (event) =>{
        event.preventDefault()
         createPost(setLoading)
      
    }
    

    const onClickCard = (id) =>{
        irParaPost(navigate, id)
    }

  

    const mostrarFeed =feed && feed.map((mostrar) =>{
        return (<CardFeed key={mostrar.id}   >
           
            <p>Enviado por:   {mostrar.username}</p>
            <h3>{mostrar.body}</h3>
         
            
            <PlaceButton>   
            <BotaoCriarPost 
            color='primary'
            onClick={() => vote(1, mostrar.id)}
            >+</BotaoCriarPost>
            
            <BotaoCriarPost 
            color='primary'
            onClick={() => vote(-1, mostrar.id)}
            >-</BotaoCriarPost>
             <h4>curtidas: {mostrar.voteSum} </h4>
            </PlaceButton>
            <p> <Button   onClick={() => onClickCard(mostrar.id)}>Comentarios:</Button>{mostrar.commentCount}</p>
             </CardFeed>
             
        )

    }) 

    


  return (
   
    <Placecard>
        <Form onSubmit={onSubmitPost}>
        <TextField
       name={'title'}
       value={form.title}
       onChange={onChange}
       label="Titulo"
       required
       autoFocus
       variant='outlined'
       color='primary'
       fullWidth
    //    type={'text'}
       
        />

<TextField
       name={'body'}
       value={form.body}
       onChange={onChange}
       label="Post"
       required
       autoFocus
       variant='outlined'
       color='primary'
       fullWidth
    //    type={'text'}
        />
       
        <Button 
         variant='contained' 
        color="primary" 
        fullWidth
        type={"submit"}>
            
            
            {loading? <CircularProgress color={'inherit'} size={24}></CircularProgress> :  <>Post</>}
               
            </Button>
           </Form>
           {/* <br></br>
           <br></br>
           <br></br> */}

          {mostrarFeed}
       
    </Placecard>
  
  )
}



export default PaginaFeed