import Header from "./components/Header";
import Login from './components/Login'
import Register from './components/Register'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App