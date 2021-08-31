import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home";
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TopNav from "./components/TopNav";



function App() {
  return (
    <BrowserRouter>
    <TopNav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
