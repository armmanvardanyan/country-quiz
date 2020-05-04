import React, { useEffect, useState } from 'react'
import classes from './DeleteQuiz.module.scss';
import axios from '../../axios'
import { Loader } from '../../components/UI/Loader/Loader';


const fetchQuiz = (setData,setLoading) => {
    axios.get('/quiz.json')
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
}

export const DeleteQuiz = () => {

    const [data,setData] = useState(null)
    const [laoding,setLoading] = useState(false)


    useEffect(()=> {
        setLoading(true)
        fetchQuiz(setData,setLoading)
    },[])


 
    function removeTest(key){
        axios.delete(`quiz/${key}.json`)
            .then(() =>fetchQuiz(setData,setLoading))
            
    }


    if(data &&!laoding){
        const keys = Object.keys(data)
        return (
            <div className={classes.DeleteQuiz}>
                <div>
                    <h1>Delete Quiz</h1>
                    <div>
                        {keys.map((key,idx) => {
                           return (
                               <div className="text-center" key={idx}>
                                   <strong>Test {idx+1}</strong>
                                   <strong>
                                     <i 
                                        style={{cursor:"pointer"}} 
                                        className={`fa fa-trash text-danger ml-2`}
                                        onClick = {()=> removeTest(key)}
                                    ></i>
                                   </strong>
                               </div>
                           )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={classes.DeleteQuiz}>
            <Loader/>
            </div>
    )
};
