import {Outlet } from 'react-router-dom'
import Nav from './Nav'

const SharedLayouts = () => {
    return(
    <>
     <Nav/>

    <Outlet/>
     
    </>
    ) 
    
    
}
export default SharedLayouts