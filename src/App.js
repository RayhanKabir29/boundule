import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import ToutSpots from './components/TourSpots/ToutSpots';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';

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
            <Route path="/tourspot/:id">
              <ToutSpots></ToutSpots>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
