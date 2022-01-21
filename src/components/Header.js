import styled from 'styled-components'
import {RiComputerLine, RiMenu3Fill, RiPlug2Line, RiStackOverflowLine} from 'react-icons/ri'
import {useNavigate } from 'react-router-dom'






const  Header = (props) => {


    let history = useNavigate();


    const Programming = (e) => {
        history('/model/'+e)
    }


    const Home = () => {
        history('/')
    }
  
  
    return(
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

                    
                    <RiMenu3Fill  id='drawer' size={25}/>

                </NavSection>

            </Contain>
        </Container>

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