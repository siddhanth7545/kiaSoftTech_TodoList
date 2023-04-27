import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = () => {
    if (window.localStorage.getItem("token")){
        return <Navigate to="/" />
    }
    else{
        return (
            <>
                {Children}
            </>
          )
    }
}

export default PublicRoute