import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Appointment/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/dashboard/appointment">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
