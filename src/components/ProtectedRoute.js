import { useContext, useEffect } from "react"
import { AuthContext } from "../context/authContext"
import {Route,Redirect} from "react-router-dom"

export default function ProtectedRoute({component: Component, ...rest}) {
    
    const {userState} = useContext(AuthContext)

  
        return (
            <Route 
                {...rest} 
                render={(props) => 
                    userState ? (
                        <Component {...rest}{...props}/>
                    ) : (
                        <Redirect to="/IniciarSecion"/>
                    )
            }
        />    
    );
}


