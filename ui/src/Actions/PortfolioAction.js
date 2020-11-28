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

export const addPortfolio=async(portfolio,portfolioDispatch)=>
{
    const token = localStorage.getItem("token");
    await axios.post('/portfolio/addPortfolio', portfolio, {
        headers: {
            authorization: 'Bearer ' + token
        }
    })
        .then(async (response) => {
            portfolioDispatch({
                type: ActionNames.ADD_PORTFOLIO,
                data: {
                    portfolio: JSON.stringify(response.data)
                }
            });
        }).catch(error => {
            portfolioDispatch({
                type: ActionNames.ADD_PORTFOLIO_FAILED,
                data: {
                    error: "Something Went Wrong"
                }
            });
        })
}