import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddService from './Components/AddService/AddService';
import ReviewService from './Components/ReviewService/ReviewService';
import Booking from './Components/Booking/Booking';
import MyOrder from './Components/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/myOrder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path='/review/:id'>
            <ReviewService></ReviewService>
          </PrivateRoute>
          <PrivateRoute path='/booking/:id'>
            <Booking></Booking>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
