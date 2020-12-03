import React from 'react'
import * as ActionNames from '../ActionNames';

var VolunteerStateContext = React.createContext()
var VolunteerDispatchContext = React.createContext()

function VolunteerReducer(state, action) {

	switch (action.type) {
        case ActionNames.TOTAL_AREAWSIE_VOLUNTEER:
            return{...state,totalAreaWiseVolunteer:action.data.total}
		
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

function VolunteerProvider({ children }) {
	var [state, dispatch] = React.useReducer(VolunteerReducer, {
		totalAreaWiseVolunteer:0
	})

	return (
		<VolunteerStateContext.Provider value={state}>
			<VolunteerDispatchContext.Provider value={dispatch}>
				{children}
			</VolunteerDispatchContext.Provider>
		</VolunteerStateContext.Provider>
	)
}

function useVolunteerState() {
	var context = React.useContext(VolunteerStateContext)
	if (context === undefined) {
		throw new Error('useVolunteerState must be used within a VolunteerProvider')
	}
	return context
}

function useVolunteerDispatch() {
	var context = React.useContext(VolunteerDispatchContext)
	if (context === undefined) {
		throw new Error('useVolunteerDispatch must be used within a VolunteerProvider')
	}
	return context
}

export { VolunteerProvider, useVolunteerState, useVolunteerDispatch }

