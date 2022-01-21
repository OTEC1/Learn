import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Postmodel from './Postmodel';



const Plan = (props) => {


    const [showModel, setShowModel] = useState("close");
    let {e} = useParams();
    console.log(e,"Here");
    const redirectUser = (e) => {
        e.preventDefault();

        //if(props.user){}

            switch(showModel){
                case "open":
                    setShowModel("close");
                    break;

                case "close":
                    setShowModel("open");
                break;

                default:
                    setShowModel("close");
                    break;
                }
        
        };


    return(
        <Container>
            <Postmodel  showModel={e} redirectUser={redirectUser} />
        </Container>
    )
}



const Container = styled.div`
height: 100vh;

`;


export default Plan;


