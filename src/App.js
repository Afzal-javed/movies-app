import React from "react";
import "./App.scss";
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import MovieDetail from "./Component/MovieDetail/MovieDetail";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <div className="container">
     <Routes >
      <Route path="/" exact Component={Home}/>
      <Route path="/movie/:imdbID" Component={MovieDetail}/>
      <Route path="*" Component={PageNotFound}/>
     </Routes >
     </div>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
