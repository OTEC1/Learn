import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Postmodel from './Postmodel';



const Plan = (props) => {


    const [showModel, setShowModel] = useState("c");
    let {e} = useParams();

    const redirectUser = (e) => {
        e.preventDefault();

        //if(props.user){}

            switch(showModel){
                case "o":
                    setShowModel("c");
                    break;

                case "close":
                    setShowModel("o");
                break;

                default:
                    setShowModel("c");
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


