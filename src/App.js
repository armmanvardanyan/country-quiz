import React,{useEffect,useContext} from "react";
import "./App.css";
import { Layout } from "./hoc/Layout/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import { QuizList } from "./pages/QuizList/QuizList";
import { Quiz } from "./pages/Quiz/Quiz";
import { AddQuiz } from "./pages/AddQuiz/AddQuiz";
import { DeleteQuiz } from "./pages/DeleteQuiz/DeleteQuiz";
import { Auth } from "./pages/Auth/Auth";
import { AuthContext } from "./context/auth/AuthContext";




function App() {
  const {setLogged} = useContext(AuthContext)
  useEffect(()=> {
    setLogged()
  },[])

  const logged = localStorage.getItem("token") 
  if(logged){
    return (
      <Layout>
        <Switch>
          <Route path="/add-quiz" exact component={AddQuiz} />
          <Route path="/delete" exact component={DeleteQuiz} />
          <Route path="/quiz/:id"   component={Quiz} />
          <Route path="/" exact component={QuizList} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    )
  }

  return (
      <Layout>
        <Switch>
          <Route path="/auth" exact component={Auth} />
          <Route path="/quiz/:id"   component={Quiz} />
          <Route path="/" exact component={QuizList} />
          <Redirect to="/" />
        </Switch>
      </Layout>
   
  );
}

export default App;
