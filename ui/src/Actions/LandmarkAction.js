import * as ActionNames from '../ActionNames';
import axios from '../axios';

export const addLandmark = async (landmarkDispatch, landmark) => {
    const token = localStorage.getItem("token");
    await axios.post('/landmark/add', landmark, {
        headers: {
            authorization: 'Bearer ' + token
        }
    })
        .then(async (response) => {
            landmarkDispatch({
                type: ActionNames.ADD_LANDMARK,
                data: {
                    landmark: JSON.stringify(response.data.landmark)
                }
            });
        }).catch(error => {
            landmarkDispatch({
                type: ActionNames.ADD_LANDMARK_FAILED,
                data: {
                    error: "Something Went Wrong"
                }
            });
        })
};