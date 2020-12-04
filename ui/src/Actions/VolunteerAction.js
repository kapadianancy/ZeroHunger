import * as ActionNames from '../ActionNames';
import axios from '../axios';

export const totalAreawiseVolunteer = async (volunteerDispatch,id) => {
    await axios.get('/volunteer/areaWiseTotal/'+id)
        .then(async (response) => {
            //console.log(response)
            volunteerDispatch({
                type: ActionNames.TOTAL_AREAWSIE_VOLUNTEER,
                data: {
                    total: response.data.total
                }
            });
        }).catch(error => {
            throw new Error(error);
        })
};

export const totalVolunteer = async (volunteerDispatch) => {
    await axios.get('/volunteer/total/')
        .then(async (response) => {
            volunteerDispatch({
                type: ActionNames.TOTAL_VOLUNTEER,
                data: {
                    total: response.data.total
                }
            });
        }).catch(error => {
            throw new Error(error);
        })
};