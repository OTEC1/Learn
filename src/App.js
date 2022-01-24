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


function App(props) {

  useEffect(() => {
  
  },[]);

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
           <Route  path="/model/:table"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/model/:table" element={<Model/>}/>
          </Routes>




          <Routes>
          <Route  path="/tabs/:tab"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/tabs/:tab" element={<Tabs/>}/>
          </Routes>



          <Routes>
          <Route  path="/readmore"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/readmore" element={<Readmore/>}/>
          </Routes>




          <Routes>
          <Route  path="/MeWorker/:e"  element={<Header/>}/>
          </Routes>
          <Routes> 
           <Route  path="/MeWorker/:e" element={<Plain/>}/>
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
