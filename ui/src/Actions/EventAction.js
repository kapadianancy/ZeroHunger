import * as ActionNames from '../ActionNames';
import axios from '../axios';


export const getAllEvent = async(eventDispatch) => {
    
        await axios.get('/event/getAllEvent')
        .then(async (response) => {
            eventDispatch({
                type: ActionNames.EVENT_LIST,
                data:{
                    events: response.data
                }
                
            });
        }).catch(error => {
           throw new Error(error);
        })
    
};

export const addEvent=async(event,eventDispatch)=>
{
    const token = localStorage.getItem("token");
    await axios.post('/event/addEvent', event, {
        headers: {
            authorization: 'Bearer ' + token
        }
    })
        .then(async (response) => {
            eventDispatch({
                type: ActionNames.ADD_EVENT,
                data: {
                    event: JSON.stringify(response.data)
                }
            });
        }).catch(error => {
            eventDispatch({
                type: ActionNames.ADD_EVENT_FAILED,
                data: {
                    error: "Something Went Wrong"
                }
            });
        })
}