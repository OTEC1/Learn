import axios from 'axios';
import {SEND_POST} from './actionType';


export const setPost = (payload) => ({
    type: SEND_POST,
    post: payload,
})



export function postClicked(data){
    return (dispatch) => {
        dispatch(setPost(data));
    };
};

export function updateCount(index){
    console.log(index)
    axios.post(process.env.REACT_APP_UPDATEPOST_END_POINT,{doc_id:index})
        .then(res => {
            console.log("Updated", res.data)
        })
        .catch(err => {
            console.log(err);
        })
}



export function TOP() {
window.scrollTo(0,0);
}


export function  format(count){

    let m;

        if(count < 1000)
                m=count;
        else if(count >= 1000 && count < 1999)
                m="1k+"
        else if(count >= 2000 && count < 2999)
               m="2k+"
        else if(count >= 3000 && count < 3999)
               m="3k+"
        else if(count >= 4000 && count < 4999)
              m="4k+"
       else if(count >= 5000 && count < 5999)
              m="5k+"
       else if(count >= 6000 && count < 6999)
              m="6k+"
       else if(count >= 7000 && count < 7999)
              m="7k+"
       else if(count >= 8000 && count < 8999)
              m="8k+"
       else if(count >= 9000 && count < 9999)
              m="9k+"
       else if(count > 10000)
              m="🔥🔥"
    return m
}


