import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import ToutSpots from './components/TourSpots/TourSpots';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivatrRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import NotFound from './components/NotFount/NotFound';
import ManageService from './components/ManageService/ManageService';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path ="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/tourspot/:id">
              <ToutSpots></ToutSpots>
            </PrivateRoute>
            <Route path="/addService">
            <AddService></AddService>
            </Route>
            <Route path ="/manageService">
              <ManageService></ManageService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
