import { useEffect, useState } from "react";
import styled  from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { updateCount ,postClicked} from "../actions";
import { connect } from "react-redux";
import axios from "axios";


const Programming = (props) => {

    const history = useNavigate();
    const {table} = useParams();
    const [tabList, setTabList] = useState([]);
    const [uptab, setUpTab] = useState([]);
    


    const ReadMore = (e) => {
        props.Last(e); 
            history('/readmore');
                updateCount(e.doc_id);
    }

             

    useEffect(() => {
        window.scrollTo(0,0);
        setTabList([]);
        checkNavTab();
        apicall1();
    },[table])


function checkNavTab(){
    let indexCount;

    if(table == "Programming")
        indexCount = 2;
   else
       if(table === "Networking")
          indexCount = 3;
   else
         indexCount = 4;

    apicall2(indexCount);
}



    function apicall1(){
        axios.post(process.env.REACT_APP_GET_BY_CATEGORY_POST_END_POINT,{category:table.replace("-"," ")})
        .then(res => {
            setTabList(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }


    function apicall2(index){
        axios.post(process.env.REACT_APP_DYNAMIC_LIST_POINT,{views:index})
        .then(res => {
            setUpTab(res.data);
        }).catch(err => {
            console.log(err);
        })
    }



    const  sendPop = (e) => {
        history('/tabs/'+e.replaceAll(" ","_"))
    }


    return (
        <Container>
            <TopNav> 
                {uptab.map((v,i) =>
                 <Navs onClick={(e) => sendPop(v)}>
                     {i !== 0 ?
                      <h5>{v}</h5>
                      :
                      <p></p>
                    }
                 </Navs>
                 )}
            </TopNav>

            <TopicsHolder>
                {tabList.length > 0 ? (
                    tabList.map((v,i) => 
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
margin-left:35%;
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
color:#f5f5f5;
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
   
   export default connect(mapStateToProps,mapDispatchToProps)(Programming)