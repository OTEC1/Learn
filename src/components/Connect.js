import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


const Connect = (props) => {


    const [name, setName] = useState('');
    const [emailPhone, setEmailPhone] = useState('');
    const [message, setMassage] = useState('');



    const Post = () => {
            if(name && emailPhone && message)
                    PostRequest();
            else
               Swal.fire({text:"Pls fill out all fields !", icon:"warning"})
    }



    const PostRequest = () => {

    }
    return (
        <>
       
        <Container>
            
            <div>
                <table>
                    <tr>
                        <td>
                        <h3>Contact Us</h3>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input  placeholder='Name'   value={name}   onChange={(e) => setName(e.target.value)}/>  &nbsp;  <input  placeholder='Email or Phone number'   value={emailPhone} onChange={(e) => setEmailPhone(e.target.value)}/>
                        </td>
                    </tr>

                
                    <tr>
                        <td>
                            <textarea  placeholder='Message'   value={message}  onChange={(e) => setMassage(e.target.value)}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button  onClick={(e) => Post()}>Send</button>
                        </td>
                    </tr>
                </table>

            </div>

        </Container>
        </>

    )
}


const Container = styled.div`
display: flex;
text-align:center;
div{
border-radius:10px;
padding:10px;
width: 40%;
height: auto;
margin-left:auto;
margin-right:auto;
margin-top:150px;
align-items:center;

table{
width: 100%;
tr td{
width: 100%;
display: flex;


input{
width: 50%;
border: 1px solid #f5f5f5;
border-radius:5px;
padding: 10px;
background: transparent;
color: #f5f5f5;
}

textarea{
margin-top:20px;
width: 100%;
height: 200px;
border: 1px solid #f5f5f5;
border-radius:5px;
padding: 10px;
background: transparent;
color: #f5f5f5;
resize:none;

}

button{
width:100%;
padding: 10px;
border-radius:5px;
background: #f5f5f5;
cursor:pointer;
margin-top:20px;
}
h3{
font-weight:700;
color: #f5f5f5;
font-size:25pt;
font-family: "Poppins", sans-serif;
}
}
}
}




@media(max-width:768px){
div{
width: 100%;
}
}
`;


export default Connect;