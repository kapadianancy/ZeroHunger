import * as ActionNames from '../ActionNames';
import axios from '../axios';

export const loginAction = async (userDispatch, user) => {
    await axios.post('/user/login', user)
        .then(async (response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            userDispatch({
                type: ActionNames.LOGIN,
                data: {
                    user: JSON.stringify(response.data.user),
                    token: response.data.token
                }
            });
        }).catch(error => {
            //console.log(error);
            userDispatch({
                type: ActionNames.LOGIN_FAILED,
                data: {
                    error: "Invalid User"
                }
            });
        })
};

export const getUserById = async (userDispatch, id) => {
    const token = localStorage.getItem("token");
    await axios.get('/user/getUserById/' + id, {
        headers: {
            authorization: 'Bearer ' + token
        }
    })
        .then(async (response) => {
            userDispatch({
                type: ActionNames.GET_USER,
                data: {
                    user: response.data
                }
            });
        }).catch(error => {
            throw new Error(error);
        })
};

export const updateProfileAdmin = async (userDispatch, id, user) => {
    const token = localStorage.getItem("token");
    await axios.put('/user/edit/' + id, user, {
        headers: {
            authorization: 'Bearer ' + token
        }
    })
        .then(async (response) => {
            userDispatch({
                type: ActionNames.EDIT_PROFILE_ADMIN,
                data: {
                    user: response.data
                }
            });
        }).catch(error => {
            throw new Error(error);
        })
};