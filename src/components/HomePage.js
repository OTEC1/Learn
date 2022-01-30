import styled from 'styled-components'
import {RiPlug2Line,RiArrowLeftCircleLine,RiArrowRightCircleLine, RiMicrosoftLine, RiFacebookBoxLine, RiAmazonLine, RiFacebookCircleLine} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom';
import {data} from '../FontEndDB/WriteUps';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import { useState,useEffect} from 'react';
import {postClicked, updateCount} from '../actions'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { BiBookReader, BiNetworkChart } from 'react-icons/bi';



const  HomePage = (props) => {

    document.title ="Network Programming 🚀💥";


    const [list, setList] = useState([]);
    const [tablist, setTablist] = useState([]);
    let history = useNavigate();


    useEffect(() => {
        apicall1();
        apicall2();
      
    },[])


    function apicall1(){
        axios.get(process.env.REACT_APP_GET_POST_END_POINT)
        .then(res => {
            setList(res.data);
        }).catch(err => {
            console.log(err);
        })
    }


    function apicall2(){
        axios.post(process.env.REACT_APP_DYNAMIC_LIST_POINT,{views:1})
        .then(res => {
            setTablist(res.data);
        }).catch(err => {
            console.log(err);
        })
    }




    const ReadMore = (e) => {
        props.Last(e); 
            history('/readmore');
                updateCount(e.doc_id);
         }



    const  sendPop = (e) => {
        history('/tabs/'+e.replaceAll(" ","_"))
    }

    return(
        <>
        <LeftDiv>
            
        </LeftDiv>

        <RightDiv>
            
        </RightDiv>


        <TopMequee>
            <Marquee speed={100}  gradient={false}>

                {tablist.length > 0 ? (
                    tablist.map((v,i) =>  
                    i !== 0 ? (
                    <Contain onClick={(e) => sendPop(v)}>
                      <BiBookReader/> &nbsp; {v}  
                    </Contain>
                     ):
                     (<p></p>)
                    )
                ): (
                    <p>Loading...</p>
                )}
                
            </Marquee>   
        </TopMequee>


        <CurvedSlider>
            {list.length > 0 ? (
                <Slider duration={3500} autoplay={1} previousButton={<RiArrowLeftCircleLine color="red"/>} nextButton={<RiArrowRightCircleLine color="red"/>}>
                            {list.map((v, i) => 
                                v.img_url ?
                                <div key={i}  onClick={(e) => ReadMore({img_url:v.img_url, writeup:v.writeup, category:v.category, video_url:v.video_url, date_time:v.date_time, doc_id:v.doc_id, views:v.views, title:v.title})}>
                                    <h5>
                                        {v.writeup.length > 120 ? v.writeup.substring(0,120) +"... Read more" : v.writeup}
                                    </h5>
                                    <img alt={v.title}  src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+v.img_url}  />
                                    
                                </div>
                                :<p></p>
                            )}
                    </Slider>
                ):<p></p>}
        </CurvedSlider>

        <Container>
            {list.length > 0 ? (
                list.map((v,i) =>  
                    <DaliyPost onClick={(e) => ReadMore({img_url:v.img_url, writeup:v.writeup, category:v.category, video_url:v.video_url, date_time:v.date_time, doc_id:v.doc_id, views:v.views, title:v.title})}>
                        <img alt={v.title}  src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+v.img_url}  />
                        <h5>{v.writeup.length > 210 ? v.writeup.substring(0,210)+" ...Read more" : v.writeup}</h5>
                    </DaliyPost>)
                ):<div  id='loader'>
                        Loading...
                 </div> 
                }
        </Container>
        </>
    )


}



const CurvedSlider = styled.div`
height: 400px;
width: 65%;
margin-left:60px;
margin-top:95px;
clip-path: ellipse(78% 100% at 51.96% 0%);

img{
height: 400px;
width: 100%;
object-fit:cover;
border-radius: 10px 10px 0px 0px;
}

h5{
position: absolute;
height: auto;
width: 30%;
z-index:200;
right:0;
margin: 10px;
border-radius:10px;
padding: 10px;
color: #fff;
background-image: linear-gradient(to top right,#9e2bfd69, #ffd000);
font-family: "Poppins", sans-serif;
}


@media(max-width:768px){
width: 100%;
margin-left:0px;
margin-top:120px;
height: 315px;
clip-path: ellipse(93% 100% at 49.14% 0%);

img{
height: 400px;
}

h5{
height: 155px;
overflow: hidden;
font-size:9pt;
padding: 15px;
margin-top:0px;
}
}
`;


const Container = styled.div`
height: 100vh;
width: 70%;
margin-top:20px;
display: flex;
flex-wrap:wrap;
padding: 10px;
margin-left:50px;


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

& > *:first-of-type{
width: 60%;
height: 320px;
margin: 5px;
img{
height: 70%;
}
}

@media(max-width:768px){
width: 100%;
padding: 0px;
margin-left:0px;
overflow-x:hidden;

::-webkit-scrollbar {
display: none;
}

& > *:first-of-type{
width: 100%;
img{
height: 70%;
}
}



#loader{
margin-left:35%;
margin-top:80%;
}

}    
`;




const DaliyPost = styled.div`
width: 30%;
height: 320px;
background-image: linear-gradient(to top right,#9e2bfd69, #ffd000);
border-radius:10px;
margin: 5px;

img{
height: 60%;
width: 100%;
object-fit:cover;
border-radius:10px;
}


h5{
font-size:12pt;
font-weight:800;
word-wrap: break-word;
padding-left: 10px;
padding-right:10px;
padding-bottom:10px;
font-family: "Poppins", sans-serif;
font-size:9pt;
color:#f5f5f5;
}



@media(max-width:768px){
width:95%;


}

`;



const LeftDiv = styled.div`
position: fixed;
height: 300px;
width: 50px;
margin-top:7%;
background: #f5f5f5;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
z-index:200;

@media(max-width:768px){
right: 0;
bottom: 0;
margin-bottom:20px;
height: 10vh;
margin-left:auto;
}    
`

const RightDiv = styled.div`
position: absolute;
right: 0;
top:0;
position: fixed;
height: 100vh;
width: 14%;
margin-top:7.5%;
@media(max-width:768px){
display: none;
}

`;


const TopMequee = styled.div`
position: fixed;
height: auto;
width: 100%;
z-index:200;
background-image: linear-gradient(to top right,#162343, #02041a);
@media(max-width:768px){
margin-top:40px;
}
`;

const Contain = styled.div`
font-size:16px;
display: flex;
justify-content:center;
align-items:center;
text-align:center;
background-image: linear-gradient(to top right,#ffea2e, #8b7307);
font-family: "Poppins", sans-serif;
border-radius:5px;
padding: 12px;
margin: 10px;
justify-content:space-between;
font-weight:700;

@media(max-width:768px){
font-size:9pt;
padding: 8pt;
}

`;



const mapStateToProps =  (dispatch) => {
 return {};
}



const mapDispatchToProps = (dispatch)  => ({
    Last:(payload) =>  dispatch(postClicked(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)