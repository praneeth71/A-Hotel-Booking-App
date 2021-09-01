import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home";
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TopNav from "./components/TopNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <BrowserRouter>
    <TopNav/>
    <ToastContainer position="top-center"/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
