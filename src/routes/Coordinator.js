
export const goToHome = (navigate) =>{
    navigate('/')
}

export const goToProfile = (navigate, login) =>{
    navigate(`/profile/:${login}`)   
}

export const goToError = (navigate) =>{
    navigate('/errorPage')
}

export const goToLogin = (navigate) =>{
    navigate('/loginPage')
}