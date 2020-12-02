import * as ActionNames from '../ActionNames';
import axios from '../axios';

export const addReceiver = async (receiverDispatch, receiver) => {
    const token = localStorage.getItem("token");
    await axios.post('/receiver/add', receiver, {
        headers: {
            authorization: 'Bearer ' + token
        }
    })
        .then(async (response) => {
            receiverDispatch({
                type: ActionNames.ADD_RECEIVER,
                data: {
                    receiver: JSON.stringify(response.data)
                }
            });
        }).catch(error => {
            receiverDispatch({
                type: ActionNames.ADD_RECEIVER_FAILED,
                data: {
                    error: "Something Went Wrong"
                }
            });
        })
};