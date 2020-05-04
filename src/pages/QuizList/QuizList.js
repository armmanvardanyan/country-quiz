import React, { useState,useEffect } from "react";
import classes from "./QuizList.module.scss";
import { NavLink } from "react-router-dom";
import axios from '../../axios'
import { Loader } from "../../components/UI/Loader/Loader";

export const QuizList = () => {

  const [qzList,setQzList] = useState(null)

  useEffect(()=>{
        axios.get("/quiz.json")
          .then(res => setQzList(res.data) )
         
  },[])

  let list =  <Loader/>
  if(qzList){
    const keys = Object.keys(qzList)
    list = (<div>
    {keys.map((itm,idx) => (
      <NavLink to={"/quiz/"+itm} key={itm}>
          <div>Test №{idx+1}</div>
      </NavLink>
    ))}
  </div>)
  }                  


    return (
      <div className={classes.QuizList}>
          {list}
      </div>
    );


 
};
