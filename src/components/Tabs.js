import React, {useState, useEffect, useRef}  from 'react'
import {RiEye2Line, RiEyeLine, RiTimeLine}  from 'react-icons/ri'
import { updateCount ,postClicked} from "../actions";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import {BiRocket}  from 'react-icons/bi'
import {format} from '../actions'
import { connect } from 'react-redux';
import axios from 'axios';




const Tabs = (props) => {

   
    const {tab} = useParams();
    const [list, setList] = useState([]);
    const history = useNavigate();
    document.title = "NP "+tab;

    useEffect(() => {
      window.scrollTo(0,0);
      Collector(tab);
    },[])



   function Collector(tab){
       let e = tab.replaceAll("_"," ");
       console.log(e);
        axios.post(process.env.REACT_APP_TABS_LIST_POINT,{tab:e})
                .then(res => {
                   setList(res.data);
                }).catch(err => {
                    console.log(err);
            }); 
    }



    const ReadMore = (e) => {
        props.Last(e); 
            history('/readmore');
                updateCount(e.doc_id);
    }


    return (
        <Container>
            <TopNav> 
               
            </TopNav>

            <TopicsHolder>
                {list.length > 0 ? (
                    list.map((v,i) => 
                        <Topic  onClick={(e) => ReadMore({img_url:v.img_url, writeup:v.writeup, category:v.category, video_url:v.video_url, date_time:v.date_time, doc_id:v.doc_id, views:v.views, title:v.title})}>
                                <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+v.img_url} />
                                <div>
                                    {v.writeup.length > 110 ? v.writeup.substring(0,110) +"... Read more" :  v.writeup}
                                </div>
                        </Topic>

                        )
                   ):(
                   <div  id="loader">
                        Loading...
                   </div>
                   )   
                }    
            </TopicsHolder>
           

        </Container>
    )

}


const Container = styled.div`
width: 100%;
height: 100vh;
font-family: "Poppins", sans-serif;



#loader{
position: absolute;
width: 100px;
height: 100px;
border-radius:50%;
margin-left:45%;
margin-right:auto;
top:0;
margin-top:25%;
border: 2px solid #f5f5f5;
color:#f5f5f5;
display: flex;
justify-content:center;
text-align:center;
align-items:center;
}

}

@media(max-width:768px){

#loader{
margin-left:30%;
margin-top:80%;
}
}

`;

const TopNav = styled.div`
width: 100%;
display: flex;
overflow-y: scroll;

::-webkit-scrollbar {
display: none;
}

@media(max-width:768px){
margin-top:30px;
}
`;

const Navs = styled.div`
display: flex;
justify-content:center;
align-items:center;
width: auto;
height: 40px; 
color: #000;
font-size:12pt;
background-image: linear-gradient(to top right,#ffea2e, #8b7307);
border-radius:10px;
margin-left: 20px;
margin-top:7px;
cursor: pointer;
white-space: nowrap;



h5{
width: auto;
text-align:center;
padding: 10px;
}
`;



const TopicsHolder = styled.div`
display: flex;
width: 70%;
height: auto;
margin-left:20px;
margin-top:20px;

@media(max-width:768px){
flex-wrap:wrap;
width: 100%;
margin-left:0px;
}
`;


const Topic = styled.div`
width: 300px;
height: 300px;
margin: 10px;
background-image: linear-gradient(to top right,#9e2bfd69, #ffd000);

img{
height: 70%;
width: 100%;
object-fit:cover;
clip-path: ellipse(99% 100% at 18.15% 0%);
}


div{
width: 100%;
height: 30%;
font-family: "Poppins", sans-serif;
font-weight:600;
padding: 5px;
font-size:9pt;
}


@media(max-width:768px){
width: 100%;
border-radius:8px;


img{
width: 100%;
border-radius:8px;
}
}

`;





const mapStateToProps =  (dispatch) => {
    return {};
   }
   
   
   const mapDispatchToProps = (dispatch)  => ({
       Last:(payload) =>  dispatch(postClicked(payload)),
   })
   
   export default connect(mapStateToProps,mapDispatchToProps)(Tabs)