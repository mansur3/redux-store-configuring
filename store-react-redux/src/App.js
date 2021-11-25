
import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import {Home} from "./components/Home";
import {Todo} from "./components/Todo";
import {Login} from "./components/login";

function App() {
  return (
    <div className="App">
        <Link to = "/">Home</Link>
        <Link to = "/todos">Todos</Link>
        <Link to = "/login">Login</Link>
        <Switch>
          <Route exact path = "/">
           <Home />
          </Route>
          <Route path = "/todos">
            <Todo />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
