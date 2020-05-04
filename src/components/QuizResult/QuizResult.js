import React from "react";
import classes from "./QuizResult.module.scss";
import { Button } from "react-bootstrap";
import {withRouter} from 'react-router-dom'
 const QuizResult = (props) => {

  const { quiz, results,repeat} = props

  return (
    <div style={{ overflow: "auto" }}>
      <h2 className="text-center">Results</h2>
      {quiz.map((item, idx) => {
        const values = Object.values(results[idx]);
        const rightAnswerUrl = item.answers.filter( (i) => +(i.id) === +(item.rightAnswerId ))[0].url;
     
        const cls = [
          "ml-2 fa fa-",
          values[0] ? `check ${classes.Success}` : `times ${classes.Danger}`,
        ];
        return (
          <div key={item + idx} className="text-center">
           {idx+1}. {item.question}
            <i className={cls.join("")}></i>
            {!values[0] && (
              <img
                className="ml-1"
                src={rightAnswerUrl}
                width={25}
                alt={"img"}
              />
            )}
          </div>
        );
      })}

      <div className={classes.Buttons}>
        <Button onClick = {repeat}>Repeat</Button>
        <Button onClick={()=>props.history.push("/")}>Quiz List</Button>
      </div>
    </div>
  );
};


export  default withRouter(QuizResult)