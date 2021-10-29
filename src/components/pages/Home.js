import React, {useEffect} from 'react'

import {useSelector} from 'react-redux' 
import Header from '../imports/Header'
import { useHistory } from 'react-router'

export default function Home() {

    const user = useSelector(state => state.isLoggedIn)
    const history = useHistory()

    const route =()=>{
    const token = localStorage.getItem('x-access-token')
    return token ? true:false
    }

   useEffect(() => {
    if(!route()){
      history.push('/login')
    }
   }, [route,history])

       console.log(user);
    return (
        <>
        <Header></Header>
    
        <main>
        <div className="container">
            <h4>Welcome to home page</h4>
            
        </div>
        </main>
        </>

    )
}
