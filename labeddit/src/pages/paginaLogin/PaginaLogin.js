import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro, irParaFeed, irParaLogin, irParaPost } from '../routes/Cordinator'
import {Button} from '@material-ui/core'
import { InputsContainer, ScreenContainer } from './StylesLogin'
import TextField from "@material-ui/core/TextField"
import useForm from '../../Hooks/Hooks'
import Logo from '../../img/logo.png'
import { login } from '../services/user'

import useUnProtectPage from '../../Hooks/UseProtectPage'
import CircularProgress from '@material-ui/core/CircularProgress'

const PaginaLogin = () => {
    useUnProtectPage()
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({email:"", password:""})
    const [loading, setLoading] = useState(false)
   
   
    const OnsubmitInput = (event) =>{
        event.preventDefault()
        login(form, clear, navigate, setLoading)
    }

  

  return (
    <ScreenContainer>
        <img src={Logo}></img>
       <h2>Login</h2>
       <InputsContainer>
       <form onSubmit={OnsubmitInput}>
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
          
               {loading? <CircularProgress color={'inherit'} size={24}></CircularProgress> :  <>Entrar </>}
               
            </Button>
        
       </form>
       </InputsContainer>
        
       <Button onClick={() => irParaCadastro(navigate)} type="text">Crie uma Conta</Button>
    
    
    </ScreenContainer>
  )
}

export default PaginaLogin