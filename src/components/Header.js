import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {RiComputerLine, RiMenu3Fill, RiPlug2Line, RiStackOverflowLine} from 'react-icons/ri'
import {useNavigate } from 'react-router-dom';
import axios from 'axios'
import {RiCloseLine,RiSearch2Line} from 'react-icons/ri'
import { TOP } from '../actions';






const  Header = (props) => {


    let history = useNavigate();
    const [query, setQuery] = useState('');
    const [showdrawer, setshowdrawer] = useState(false);




    useEffect(() => {
        if(sessionStorage.getItem("visitCount") === null) {
             sessionStorage.setItem("visitCount","visited");  
             UPDATE();
         }
         window.addEventListener("beforeunload", (ev) => {  
            sessionStorage.setItem("visitCount",null);
         });
           
        },[])



        const runquery = () => {
            history("/homequery/"+query.toLowerCase());
        }




 function UPDATE(){
   axios.post(process.env.REACT_APP_VISIT_COUNT,{count:1})
         .then(res => {
             console.log(res.data.message,"Here")
         }).catch(err => {
             console.log(err);
         })
 }





    const Programming = (e) => {
        history('/model/'+e)
    }




    const Home = () => {
        history('/')
    }
  
  
    return(
        <>
        {showdrawer ? 
            <ShowDiv>
                 <div  id='mainview'>
                     <button onClick={(e) => { setshowdrawer(false); TOP(); } }><RiCloseLine/></button>
                        <Searchs>
                            <div>
                                <input placeholder='Search for article,video tutorial' value={query}  onChange={(e) => setQuery(e.target.value)} />
                            </div>
                            <SearchIcons onClick={(e) => runquery()}>
                                <RiSearch2Line
                                    size={15}
                                    color='#000'/>
                            </SearchIcons>


                            <table>
                                <tr>
                                    <td>
                                        <div onClick={(e) => Programming("Programming")} size={20}>
                                            <RiComputerLine/>
                                            <span>Programming</span>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div onClick={(e) => Programming("Networking")} size={20}>
                                            <RiPlug2Line />
                                            <span>Networking</span>
                                        </div>
                                    </td>

                                </tr>


                                <tr>
                                    <td>
                                        <div  onClick={(e) => Programming("How-to")} size={20}>
                                            <RiStackOverflowLine/>
                                            <span>How to</span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </Searchs>
                   </div>   
            </ShowDiv>
            :
            ""}

        <Container>
            <Contain>
                <SiteName  onClick={(e) =>  Home()}>
                    <h1>Network Programming 🚀</h1>
                </SiteName>
            


                <NavSection>
                    <div onClick={(e) => Programming("Programming")} size={20}>
                        <RiComputerLine/>
                        <span>Programming</span>
                    </div>

                    <div onClick={(e) => Programming("Networking")} size={20}>
                        <RiPlug2Line />
                        <span>Networking</span>
                    </div>
                    

                    <div  onClick={(e) => Programming("How-to")} size={20}>
                        <RiStackOverflowLine/>
                        <span>How to</span>
                    </div>

                    
                    <RiMenu3Fill  id='drawer' size={25}  onClick={(e) =>{ setshowdrawer(true); TOP(); } }/>

                </NavSection>

            </Contain>
        </Container>
        </>

    )
} 



const Container = styled.div`
height:80px;
width:100%;

`;


const Contain = styled.div`
width:100%;
position: fixed;
display:flex;
z-index:500;
justify-content:space-between;
border-bottom: 0.5px solid #E9E9E9;
font-family: "Poppins", sans-serif;
background-image: linear-gradient(to top right,#1f505f, #07091C);

@media(max-width:768px){
height: 100px;
}

`;




const ShowDiv = styled.div`
position: absolute;
height: 100vh;
width: 100%;
z-index:600;
top:0;


table{
width: 90%;
margin-top:20%;
font-family: "Poppins", sans-serif;
margin-left: 10px;
margin-right:10px;
tr td{
display: flex;
align-items:center;
text-align:center;
justify-content:center;
width: 100%;
margin: 10px;
div{
width: 100%;
display: flex;
align-items:left;
text-align:left;
justify-content:space-between;
background-image: linear-gradient(to top right,#1f505f, #07091C);
padding: 10px;
border-radius:5px;
color: #f5f5f5;
font-weight:700;
height: 30px;
}
}
}

#mainview{
height: 100vh;
width: 100%;
background-image: linear-gradient(to top right,#1f505f, #07091C); 
}

button{
background: transparent;
border:none;
padding: 5px;
color: #f5f5f5;
font-size:20pt;
font-family: "Poppins", sans-serif;
border-radius:50%;
}
`;





const Searchs = styled.div`
opacity:1;
flex-grow:1;
position: relative;
margin-top:30px;
& > div{
display: flex;
align-items:center;
justify-content:center;

input{
border: none;
box-shadow:none;
background-color:#f5f5f5;
border-radius:7px;
color: rgba(0,0,0,0.9);
width: 218px;
padding: 0 8px 0 40px;
line-height:1.75;
font-weight:400;
font-size:14px;
height: 34px;
border-color:#dce6f1;
vertical-align:text-top;
text-align:left;
}

@media(max-width:1200px){
input{
width: 80%;
}
}
`;




const SearchIcons = styled.div`
@media(max-width:768px){
width: 40px;
position: absolute;
z-index: 1;
top:10px;
left: 2px;
margin:0;
cursor:pointer;
display: flex;
justify-content: center;
margin-left:15px;

}
`;


const SiteName = styled.div`
font-weight:800;
font-size:20pt;
color: #fff;
padding:20px;

@media(max-width:768px){
font-size:12pt;
}

`;

const NavSection = styled.div`
display: flex;
color:#fff;
margin-right:10px;
div{
display: flex;
justify-content:center;
align-items:center;
text-align:center;
cursor:pointer;
&>span{
margin:10px;
}
}

#drawer{
display: none;
}

@media(max-width:768px){
#drawer{
display: block;
margin-top:20px;
margin-right:0px;
}

div{
display: none;
}
}

`;







export default Header