
import './App.css';
import Header from './MyComponents/header';
import SignUp from './MyComponents/signup';
import SignIn from './MyComponents/signin';
import ocr from './MyComponents/ocr';
//import Home from './MyComponents/home';
//import About from './MyComponents/about';
//import Footer from './MyComponents/footer';
//import Chat from './MyComponents/chat';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Switch>
        <Route  path="/" exact component={SignIn}/>
        <Route  path="/signup" exact component={SignUp}/>
        <Route  path="/signin" exact component={SignIn}/>
        <Route  path="/ocr" exact component={ocr}/>
        {/* <Route  path="/home" exact component={Home}/>
        <Route  path="/about" exact component={About}/>
        <Route  path="/chat" exact component={Chat}/> */}

      </Switch>
     
    </BrowserRouter>
  );
}

export default App;
