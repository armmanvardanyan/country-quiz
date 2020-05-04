import React, { useState, useEffect } from "react";
import classes from "./Quiz.module.scss";
import { QuizItems } from "../../components/QuizItems/QuizItems";
import QuizResult from "../../components/QuizResult/QuizResult";
import axios from "../../axios";
import { Loader } from "../../components/UI/Loader/Loader";

export const Quiz = ({ match }) => {
  const [activeQuestion, setactiveQuestion] = useState(0);
  const [finished, setIsFinished] = useState(false);
  const [results, setResults] = useState([]);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/quiz/${match.params.id}.json`);
      setQuiz(res.data);
    };
    fetchData();

    return () => {
      setQuiz([]);
    };
  }, [match.params.id]);

  const goNext = (right, id) => {
    if (activeQuestion + 1 === quiz.length) {
      setIsFinished(true);
    }
    const res = {
      [id]: +right === +id,
    };
    setResults(results.concat(res));
    setTimeout(() => {
      setactiveQuestion(activeQuestion + 1);
    }, 500);
  };

  const repeat = () => {
    setactiveQuestion(0);
    setIsFinished(false);
    setResults([]);
  };

  let quizz = <Loader />;

  if (quiz.length) {
    quizz = finished ? (
      <QuizResult quiz={quiz} results={results} repeat={repeat} />
    ) : (
      <QuizItems quiz={quiz} activeQuestion={activeQuestion} goNext={goNext} />
    );
  }

  return <div className={classes.Quiz}>{quizz}</div>;
};
