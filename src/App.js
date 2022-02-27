import React,{Components,useEffect} from 'react'
import './App.css';
import {BrowserRouter as  Router,Route, Routes}  from 'react-router-dom';
import Header from './components/Header'
import HomePage from './components/HomePage'
import Model from './components/Model'
import Plain from './components/Plain'
import Readmore from './components/Readmore'
import { postClicked } from './actions'
import { connect } from 'react-redux';
import Tabs from './components/Tabs';
import SearchResult from './components/SearchResult'
import Footer from './components/Footer'
import About from './components/About'
import Connect from './components/Connect'


function App(props) {



  return (
    <div className="App">
       <Router>


         <Routes>
          <Route  path="/"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/" element={<HomePage/>}/>
          </Routes>
          <Routes> 
           <Route  path="/" element={<Footer/>}/>
          </Routes>




          <Routes>
           <Route  path="/model/:table"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/model/:table" element={<Model/>}/>
          </Routes>
          <Routes> 
           <Route  path="/model/:table" element={<Footer/>}/>
          </Routes>



          <Routes>
          <Route  path="/tabs/:tab"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/tabs/:tab" element={<Tabs/>}/>
          </Routes>
          <Routes> 
           <Route  path="/tabs/:tab" element={<Footer/>}/>
          </Routes>



          <Routes>
          <Route  path="/readmore"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/readmore" element={<Readmore/>}/>
          </Routes>
          <Routes> 
           <Route  path="/readmore" element={<Footer/>}/>
          </Routes>




          <Routes>
          <Route  path="/homequery"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/homequery" element={<SearchResult/>}/>
          </Routes>
          <Routes> 
           <Route  path="/homequery" element={<Footer/>}/>
          </Routes>


          


          <Routes>
          <Route  path="/MeWorker/:e"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/MeWorker/:e" element={<Plain/>}/>
          </Routes>
          <Routes> 
           <Route  path="/MeWorker/:e" element={<Footer/>}/>
          </Routes>

         
          <Routes>
          <Route  path="/about/:i1/i2"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/about/:i1/:i2" element={<About/>}/>
          </Routes>


          <Routes>
          <Route  path="/contact/:i1/:i2"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/contact/:i1/:i2" element={<Connect/>}/>
          </Routes>


          </Router>
    
    </div>
  );
}



const mapStateToProps = (state) => {
  return {};
};



const mapDispatchToProps = (dispatch) => ({
 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
