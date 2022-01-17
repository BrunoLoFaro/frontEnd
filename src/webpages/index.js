import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Book from './book';
const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element = {<Home/> } />
                <Route path = "/book" element = {<Book/> } />
            </Routes>
        </Router>
    );
};
export default Webpages;