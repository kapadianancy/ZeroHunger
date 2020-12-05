import React from 'react'
import * as ActionNames from '../ActionNames';

var DonationStateContext = React.createContext()
var DonationDispatchContext = React.createContext()

function DonationReducer(state, action) {

    switch (action.type) {
        case ActionNames.TOTAL_MONEY_DONATION:
            return { ...state, totalMoney: action.data.total }
        case ActionNames.TOTAL_FOOD_DONATION:
            return { ...state, totalFood: action.data.total }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function DonationProvider({ children }) {
    var [state, dispatch] = React.useReducer(DonationReducer, {
        totalMoney: 0,
        totalFood: 0
    })

    return (
        <DonationStateContext.Provider value={state}>
            <DonationDispatchContext.Provider value={dispatch}>
                {children}
            </DonationDispatchContext.Provider>
        </DonationStateContext.Provider>
    )
}

function useDonationState() {
    var context = React.useContext(DonationStateContext)
    if (context === undefined) {
        throw new Error('useUserState must be used within a UserProvider')
    }
    return context
}

function useDonationDispatch() {
    var context = React.useContext(DonationDispatchContext)
    if (context === undefined) {
        throw new Error('useUserDispatch must be used within a UserProvider')
    }
    return context
}

export { DonationProvider, useDonationDispatch, useDonationState }

