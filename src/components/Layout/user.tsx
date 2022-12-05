import React from "react";
import Header from '../../components/Header'
import {Outlet} from 'react-router-dom'
import Footer from "../Footer/footer";


const UserLayout = (props: any) => {
    return (
        <>
            <Header/>
          
            <Outlet/>

            <Footer/>
        </>
    )
}

export default UserLayout