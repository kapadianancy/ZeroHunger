import * as ActionNames from '../ActionNames';

import axios from '../axios';



export const getAllPortfolio = async(portfolioDispatch) => {
    
        await axios.get('/portfolio/getAllPortfolio')
        .then(async (response) => {
            portfolioDispatch({
                type: ActionNames.PORTFOLIO_LIST,
                data:{
                    portfolios: response.data
                }
                
            });
        }).catch(error => {
           throw new Error(error);
        })
    
};