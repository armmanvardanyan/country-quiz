import React from "react";
import classes from './QuizItems.module.scss'


export const QuizItems = ({quiz,activeQuestion,goNext}) => {
  
  return (
    <div className={classes.QuizItems}>
      <h2 className="text-center mt-2 ">{quiz[activeQuestion].question}</h2>
      <div className={classes.ImgContainer}>
        <section className="row">
          {quiz[activeQuestion].answers.map((item, idx) => {
            const cls = [`col-4 ${idx % 2 === 0 && "offset-2"}`];
            return (
              <img
                key = {item+idx}
                width={100}
                loading={"lazy"}
                className={cls.join(" ")}
                alt = {idx}
                src={item.url}
                onClick={() => goNext(quiz[activeQuestion].rightAnswerId, item.id)}
              />
            );
          })}
        </section>
        
      </div>
      <div className={`text-right ${classes.Left}`}>
        {activeQuestion + 1} of <strong>{quiz.length}</strong>
      </div>
    </div>
  );
};
