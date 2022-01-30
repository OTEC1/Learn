import React, {useState, useEffect, useRef}  from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import {BiRocket}  from 'react-icons/bi'
import {RiEye2Line, RiEyeLine, RiTimeLine}  from 'react-icons/ri'
import {format} from '../actions'
import Parser from 'html-react-parser'




const Readmore = (props) => {

    document.title ="NP "+ props.post.title;
    
    useEffect(() => {
      window.scrollTo(0,0);
    },[])

    return(
        <>
        <HeaderPage>

        </HeaderPage>
        <Container>
            <Title>
              {props.post.title}
            </Title>
            <HeaderSection>
            <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+props.post.img_url}/>
            <RightBox>

            </RightBox>
            </HeaderSection>
         
            <MetaData>

              <div>
               <RiEyeLine id="viewPin"/>  {format(props.post.views)}
              </div>

              <div>
                <RiTimeLine id="startPin" /> {props.post.date_time}
              </div>

              <div>
               <BiRocket id="catPin"/> {props.post.category}
              </div>

              
            </MetaData>
            
            <WriteUp>
              
                {props.post.writeup.length < 200 ? 
                 <div>
                  <Ad>
                      ADVERTISMENT
                  </Ad>
                  {props.post.writeup}
                </div>
                  

                : props.post.writeup.length > 200  ?
                 <div>
                     <pre>{Parser(props.post.writeup.substring(0,props.post.writeup.indexOf(">")))}</pre>
                      <Ad>
                          ADVERTISMENT
                      </Ad>

                     <pre>{Parser(props.post.writeup.substring(props.post.writeup.indexOf(">")+1,props.post.writeup.indexOf(">>")))}</pre>
                      <Ad>
                        ADVERTISMENT  
                      </Ad>

                      <pre>{Parser(props.post.writeup.substring(props.post.writeup.indexOf(">>")+2,props.post.writeup.indexOf(">>>")))}</pre>
                      <Ad>
                        ADVERTISMENT
                      </Ad>

                        <pre>{Parser(props.post.writeup.substring(props.post.writeup.indexOf(">>>")+3,props.post.writeup.length))}</pre>
                        <Ad>
                          ADVERTISMENT
                        </Ad>

                  </div> 
                 :
                 <p></p>
                 }
                  <p></p>
            </WriteUp>

        </Container>
        </>
    )
}


const Container = styled.div`
width: 65%;
margin-left:auto;
margin-right:auto;
margin-top:120px;
img{
width: 70%;
height: 400px;
object-fit:cover;
}



@media(max-width:768px){
width: 100%;
overflow-x: hidden;
img{
width:100%;
}
}

`;


const HeaderPage = styled.div`
position: fixed;
height: 15vh;
width: 100%;
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
margin-bottom:10px;
z-index:200;
background: #b5b5b8;
`;


const HeaderSection = styled.div`
width: 100%;
display: flex;
position: relative;

`;


const RightBox = styled.div`
position: absolute;
right: 0;
height: 60vh;
width: 28%;
`


const WriteUp = styled.pre`
width: 70%;
font-size:12pt;
font-weight:800;
padding: 10px;
word-wrap: break-word;
white-space: pre-wrap;
font-family: Consolas,monospace;
color:#f5f5f5;

pre{
word-wrap: break-word;
height: auto;
white-space: pre-wrap;
font-family: Consolas,monospace;

>a{
text-decoration:none;
color: #33ff00;
}
}

@media(max-width:768px){
width: 97%;
padding: 5px;
justify-content:center;
align-items:center;
div{
width: 100%;
}

}
`;



const Ad = styled.div`
height: 200px;
width: 90%;
margin-top:20px;
text-align:center;
color: #f5f5f5;

@media(max-width:768px){
width: 100%;
}
`;


const MetaData = styled.div`
display: flex;
justify-content:space-around;
flex-direction:column;
width: 70%;

& > *:first-of-type{
  margin-left:auto;
}

div{
padding: 10px;
color:#f5f5f5;
display: flex;
align-items:center;
font-family: "Poppins", sans-serif;

  
#startPin{
color:#f5f5f5;
font-size:20pt;
margin-right:7px;
}
#catPin{
color: #2bff00;
font-size:20pt;
margin-right:7px;
}

#viewPin{
color:#f5f5f5;
font-size:20pt;
margin-right:7px;
}
}


@media(max-width:768px){
width: 100%;
}

`;



const Title = styled.div`
width: 70%;
height: 50px;
font-family: "Poppins", sans-serif;
font-weight:600;
color: #fff;

@media(max-width:768px){
margin-left:10px;
}

`;


const mapStateToProps =  (state) => {
  return{
       post: state.postState.post,
    };
 }
 
 
 const mapDispatchToProps = (dispatch)  => ({
    
 })


export default connect(mapStateToProps,mapDispatchToProps)(Readmore);