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
import ManageOrder from './Components/Manage_order/ManageOrder';
import MyOrder from './Components/MyOrder/MyOrder';
import Footer from './Components/Footer/Footer';
import Subscription from './Components/Subscription/Subscription';

function App() {
  return (
    <div className="">
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
          <PrivateRoute path='/manage-order'>
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute path='/review/:id'>
            <ReviewService></ReviewService>
          </PrivateRoute>
          <PrivateRoute path='/booking/:id'>
            <Booking></Booking>
          </PrivateRoute>
        </Switch>
        <Subscription></Subscription>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
