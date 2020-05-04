import React, { useState } from "react";
import classes from "./AddQuiz.module.scss";
import { Form, Button } from "react-bootstrap";
import axios from "../../axios";
import { v4 as uuid } from "uuid";
import { validation } from "../../utility/validation";
import { initialForm } from "../../utility/initialForm";



export const AddQuiz = (props) => {
  const [quiz, setQuiz] = useState([]);
  const [form, setForm] = useState(initialForm());
  const [formIsValid, setformIsValid] = useState(false);

  const onChangeHandler = (e) => {
    const formCopy = [...form];
    const idx = formCopy.findIndex((i) => i.name === e.target.name);
    formCopy[idx].value = e.target.value;
    formCopy[idx].touched = true;

    if (formCopy[idx].validation) {
      formCopy[idx].valid = validation(
        e.target.value,
        formCopy[idx].validation
      );
    }
    setForm(formCopy);

    let v = true;
    formCopy.forEach(({ valid }) => {
      v = valid && v;
    });

    setformIsValid(v);
  };
  const addQuestion = () => {
    const item = {
      question: form[0].value,
      rightAnswerId: form[5].value,
      answers: [
        { url: form[1].value, id: "1" },
        { url: form[2].value, id: "2" },
        { url: form[3].value, id: "3" },
        { url: form[4].value, id: "4" },
      ],
      id: uuid(),
    };
    setQuiz(quiz.concat(item));
    setForm(initialForm());
    setformIsValid(false);
  };

  const addQuiz = (e) => {
    e.preventDefault();
    axios.post("/quiz.json", quiz).then(() => props.history.push("/"));
  };

  return (
    <div className={classes.AddQuiz}>
      <Form>
        <h2 className="text-center text-light">Crate Quiz</h2>
        {form.map((item, idx) => {
          return (
            <Form.Group key={item.label}>
              <Form.Label>{item.label}</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.placeholder && item.placeholder}
                name={item.name}
                as={item.as && item.as}
                value={item.value}
                onChange={onChangeHandler}
              >
                {item.options &&
                  item.options.map((item) => (
                    <option key={item + 1}>{item}</option>
                  ))}
              </Form.Control>
              {item.touched && !item.valid && (
                <small>
                  <strong className="text-danger">{item.errorMessage}</strong>{" "}
                </small>
              ) }
            </Form.Group>
          );
        })}

        <Button variant="primary" onClick={addQuestion} disabled={!formIsValid}>
          Add Question
        </Button>

        <Button
          variant="dark"
          type="submit"
          className={"ml-2"}
          onClick={addQuiz}
          disabled={!quiz.length}
        >
          Add Quiz
        </Button>
      </Form>
    </div>
  );
};
