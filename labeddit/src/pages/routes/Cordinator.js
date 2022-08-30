export const irParaCadastro = (navigate) =>{
navigate("/cadastro")
}

export const irParaLogin = (navigate) =>{
    navigate("/")
}

export const irParaFeed = (navigate) =>{
    navigate(`/feed`)
}

export const irParaPost = (navigate, id) =>{
    navigate(`/post/${id}`)
}