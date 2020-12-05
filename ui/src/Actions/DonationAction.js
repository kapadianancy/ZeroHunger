import * as ActionNames from '../ActionNames';
import axios from '../axios';

export const totalMoneyDonation = async (donationDispatch) => {
    await axios.get('/donation/totalMoney')
        .then(async (response) => {
            donationDispatch({
                type: ActionNames.TOTAL_MONEY_DONATION,
                data: {
                    total: response.data.total
                }
            });
        }).catch(error => {
            throw new Error(error);
        })
};

export const totalFoodDonation = async (donationDispatch) => {
    await axios.get('/donation/totalFood')
        .then(async (response) => {
            donationDispatch({
                type: ActionNames.TOTAL_FOOD_DONATION,
                data: {
                    total: response.data.total
                }
            });
        }).catch(error => {
            throw new Error(error);
        })
};