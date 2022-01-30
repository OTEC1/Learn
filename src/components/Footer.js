import styled  from "styled-components";
import { RiAccountCircleLine, RiCopyrightLine, RiFacebookBoxLine, RiInstagramLine, RiMessage2Line, RiSafeFill, RiTeamLine, RiTwitterLine, } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";

const Footer = (props) => {


    const history = useNavigate();


    const  nav = (data,i1,i2) => {
            history(`${data}/`+i1+"/"+i2);
    } 
    return(
        <Footers>

        <LEFT> 
            <table>
                <tr>
                    <td>
                     Contact us &nbsp; <RiMessage2Line/>
                    </td>
                </tr>

                <tr>
                    <td>
                      Like our Page on  &nbsp;<RiFacebookBoxLine/> 
                    </td>
                </tr>


                <tr>
                    <td>
                      Follow us on  &nbsp;<RiInstagramLine/> 
                    </td>
                </tr>


                <tr>
                    <td>
                      Connect  on &nbsp; <RiTwitterLine/> 
                    </td>
                </tr>

            </table>
        </LEFT>

        <MIDDLE> 
           <table>
                <tr>
                    <td  onClick={(e)=> nav("about",0,0)}>
                      About us &nbsp; <RiAccountCircleLine/>
                    </td>
                </tr>

                <tr>
                    <td>
                     Our policy  &nbsp;<RiCopyrightLine/> 
                    </td>
                </tr>

                <tr>
                    <td onClick={(e)=> nav("contact",0,0)}>
                     Connect  &nbsp;<RiTeamLine/> 
                    </td>
                </tr>

                <tr>
                    <td onClick={(e)=> nav("about",1200,1200)}>
                     Disclaimer  &nbsp;<RiSafeFill/> 
                    </td>
                </tr>

            </table>
        </MIDDLE>

        
        <RIGHT> 
        <table>
                <tr>
                    <td>
                    </td>
                </tr>

            </table>

        </RIGHT>

</Footers>
    )
}





const Footers = styled.div`
position: relative;
height: auto;
width: 100%;
background-image: linear-gradient(to top right,#1f505f, #07091C);
bottom: 0;
display: flex;
flex-wrap:wrap;
padding-top:50px;
padding-bottom:50px;
@media(max-width:768px){
}
`;





const LEFT = styled.div`
width: 35%;
height: 100%;


tr td{
margin: 10px;
font-weight:500;
font-family: "Poppins", sans-serif;
color: #f5f5f5;
display: flex;
justify-content:left;
align-items:center;
text-align:left;
}
@media(max-width:768px){
border-top:1px solid #fff;
margin-top:35px;
width: 90%;
}
`;


const MIDDLE = styled.div`
width: 30%;
height: 100%;



tr td{
margin: 10px;
font-weight:500;
font-family: "Poppins", sans-serif;
color: #f5f5f5;
display: flex;
justify-content:left;
align-items:center;
text-align:left;
}

@media(max-width:768px){
margin-top:35px;
width: 90%;
border-top:1px solid #fff;
}
`;


const RIGHT = styled.div`
width: 35%;
height: 100%;
@media(max-width:768px){
width: 100%;
}
`;

export default Footer;