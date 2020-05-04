import React from 'react'
import classes from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={classes.Container}>
             <div className={classes.Loader}><div></div></div>   
        </div>
        
    )
}