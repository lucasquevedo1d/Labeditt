import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro, irParaFeed, irParaLogin, irParaPost } from '../routes/Cordinator'
import {Button} from '@material-ui/core'
import { InputsContainer, LoginFormContainer, LogoImage, ScreenContainer } from './StylesCadastro'
import TextField from "@material-ui/core/TextField"
import useForm from '../../Hooks/Hooks'
import Logo from '../../img/logo.png'
import CircularProgress from '@material-ui/core/CircularProgress'
import { cadastrar } from '../services/user'

const PaginaCadastro = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({username: "",email:"", password:""})
    const [loading, setLoading] = useState(false)

  

  const OnsubmitInput = (event) =>{
    event.preventDefault()
    cadastrar(form, clear, navigate, setLoading )
}


    
  return (
    <ScreenContainer>
        <LoginFormContainer>
        <LogoImage src={Logo}></LogoImage>
        </LoginFormContainer>
       <h2>Cadastrar</h2>
       <InputsContainer>

       <form onSubmit={OnsubmitInput}>
       <TextField
           name={'username'}
           value={form.username}
           onChange={onChange}
            label="Nome"
            fullWidth
            type={"name"}
            required
           />

        <TextField
           name={'email'}
           value={form.email}
           onChange={onChange}
            label="Email"
            fullWidth
            type={"email"}
            required
           />
            <TextField
           name='password'
           value={form.password}
           onChange={onChange}
           label="Senha"
           fullWidth
           margin={"normal"}
           type={"password"}
           required

           />
           <Button 
           variant='contained' 
           color="primary" 
           fullWidth
           type={"submit"}
           >
          
          {loading? <CircularProgress color={'inherit'} size={24}></CircularProgress> :  <>Fazer cadastro </>}
               
            </Button>

        
       </form>
       </InputsContainer>

        
    
    
    </ScreenContainer>
  )
}

export default PaginaCadastro