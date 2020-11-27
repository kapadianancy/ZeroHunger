import * as ActionNames from '../ActionNames';
//import {useUserDispatch} from '../Context/UserContext';
import axios from '../axios';



export const loginAction = async(userDispatch,user) => {
    
        await axios.post('/user/login', user)
        .then(async (response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            
            userDispatch({
                type: ActionNames.LOGIN,
                data:{
                    user: JSON.stringify(response.data.user),
                    token: response.data.token
                }
                
            });
        }).catch(error => {
            //console.log(error);
            userDispatch({
                type: ActionNames.LOGIN_FAILED,
                data:{
                    error:"Invalid User"
                }
               
            });
        })
    
};