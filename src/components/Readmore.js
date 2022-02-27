import React, {useState, useEffect, useRef}  from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import {BiRocket}  from 'react-icons/bi'
import {RiEye2Line, RiEyeLine, RiTimeLine}  from 'react-icons/ri'
import {format,updateCount,postClicked,TOP} from '../actions'
import Parser from 'html-react-parser'
import  {MobileView, BrowserView}  from 'react-device-detect';
import axios from "axios";
import { useNavigate } from 'react-router-dom';




const Readmore = (props) => {

    document.title = "NP "+ props.post.title
    const [list, setList]= useState([]);
    const history = useNavigate();
    
    useEffect(() => { TOP();
      axios.get(process.env.REACT_APP_GET_POST_END_POINT)
        .then(res => {
            setList(res.data);
        }).catch(err => {
          console.log(err.message)
        });

    },[])



    const ReadMore = (e) => {
      TOP();
      props.Last(e); 
          history('/readmore');
              updateCount(e.doc_id);
       }


    

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
                 <div>
                     <pre>{Parser(props.post.writeup.substring(0,props.post.writeup.indexOf("&%")))}</pre>
                      <Ad>
                          ADVERTISMENT
                      </Ad>

                     <pre>{Parser(props.post.writeup.substring(props.post.writeup.indexOf("&%")+2,props.post.writeup.indexOf("&%%")))}</pre>
                      <Ad>
                        ADVERTISMENT  
                      </Ad>

                      <pre>{Parser(props.post.writeup.substring(props.post.writeup.indexOf("&%%")+3,props.post.writeup.indexOf("&%%%")))}</pre>
                      <Ad>
                        ADVERTISMENT
                      </Ad>

                        <pre>{Parser(props.post.writeup.substring(props.post.writeup.indexOf("&%%%")+4,props.post.writeup.length))}</pre>
                        <Ad>
                          ADVERTISMENT
                        </Ad>

                  </div> 
               
            </WriteUp>
        </Container>

        
            <MoreContent>
                <label>
                You may also like
                </label>
                <RelatedContent>
                        {list.map((v,i) =>
                         v.img_url !== undefined  &&  v.doc_id !== undefined  ?
                            <MiniContainer   onClick={(e)=>  ReadMore({img_url:v.img_url, writeup:v.writeup, category:v.category, video_url:v.video_url, date_time:v.date_time, doc_id:v.doc_id, views:v.views, title:v.title})}>
                              <img  id="im" src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+v.img_url}/>
                                <MobileView>
                                <div id="up">{v.title}</div>
                                <br/>
                                <div id="down">{v.writeup.length > 100 ? v.writeup.substring(0,70)+" ... Read more" : v.writeup }</div>
                                </MobileView>


                                <BrowserView>
                                <div id="down"> {v.writeup.length > 60 ? v.writeup.substring(0,60)+" ... Read more" : v.writeup }</div>
                                </BrowserView>
                              </MiniContainer>
                         : <div></div>
                        )}
                </RelatedContent>
            </MoreContent>
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

img{
width: 100%;
min-width:100%;
max-width:100%;
height: 300px;
min-height:300px;
max-height:300px;
margin-top:50px;
margin-bottom:50px;
object-fit:cover;

}

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





const MoreContent = styled.div`
width: 80%;
height: 200px;
text-align:center;
padding-bottom:200px;
label{
color:red
font-weight:900;
font-size:15pt;
color:#fff;
font-family: "Poppins", sans-serif;
}

@media(max-width:768px){
padding: 0px;
width: 100%;
min-width:100%;
max-width:100%;
}

`;


const RelatedContent = styled.div`
margin-top:10px;
width: 100%;
height: 200px;
padding: 5px;
display: flex;
flex-wrap:wrap;
justify-content:center;
overflow-y:scroll;
overflow-x:hidden;


::-webkit-scrollbar {
display: none;
}


#im{
border-radius:5px;
width: 180px;
height: 120px;
clip-path: ellipse(78% 100% at 32.64% 0%);
object-fit:cover;
}

@media(max-width:768px){
padding: 0px;
}


`;


const MiniContainer = styled.div`
width: 180px;
height: 170px;
background: #fff;
border-radius:10px;
margin: 10px;


#im{
border-radius:5px;
width: 180px;
height: 120px;
clip-path: ellipse(78% 100% at 32.64% 0%);
object-fit:cover;
}

#up{
text-align:left;
padding: 5px;
font-size:9pt;
font-weight:600;

}


#down{
text-align:left;
padding-bottom: 10px;
padding-left:3px;
padding-right:3px;
font-size:9pt;
color: #000;
}

@media(max-width:768px){
width: 90%;
display: flex;
height: 120px;
border-radius: none;

#im{
width:150px;
height:120px;
clip-path:none;
border-radius:10px 0px 0px 10px;
min-width:150px;
max-width:150px;
}
}

`;




const mapStateToProps =  (state) => {
  return{
       post: state.postState.post,
    };
 }
 
 
 const mapDispatchToProps = (dispatch)  => ({
  Last:(payload) =>  dispatch(postClicked(payload)),
 })


export default connect(mapStateToProps,mapDispatchToProps)(Readmore);