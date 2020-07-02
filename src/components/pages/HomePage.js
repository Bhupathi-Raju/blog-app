import React from 'react'
import HomeTemplate from '../templates/HomeTemplate'
import {Redirect} from 'react-router-dom'


export default function HomePage(){
    const token = localStorage.getItem("token");

    if(token == null){
        return <Redirect to="/login"/>
    }

    return (
        <HomeTemplate/>
    );
}