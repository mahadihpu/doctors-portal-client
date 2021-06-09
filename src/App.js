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
import AllAppointments from './components/AllAppointments/AllAppointments';
import AddDoctor from './components/AddDoctor/AddDoctor';


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
        <Route path="/dashboard/allAppointments">
          <AllAppointments />
        </Route>
        <Route path="/dashboard/addDoctor">
         <AddDoctor />
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
