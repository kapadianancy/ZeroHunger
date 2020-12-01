import React from 'react'
import * as ActionNames from '../ActionNames';

var ReceiverCategoryStateContext = React.createContext()
var ReceiverCategoryDispatchContext = React.createContext()

function ReceiverCategoryReducer(state, action) {
	console.log(action.type);
	switch (action.type) {
		case ActionNames.ADD_RECEIVER_CATEGORY:
			return { ...state, ReceiverCategory: action.data.ReceiverCategory, error: null }
		case ActionNames.ADD_RECEIVER_CATEGORY_FAILED:
			return { ...state, error: action.data.error, ReceiverCategory: null }
		case ActionNames.RECEIVER_CATEGORY_LIST:
			return { ...state, ReceiverCategories: action.data.ReceiverCategories }
		case ActionNames.REMOVE_RECEIVER_CATEGORY:
			return { ...state, ReceiverCategory:null}
		case ActionNames.GET_RECEIVER_CATEGORY:
			return { ...state, ReceiverCategory:action.data.ReceiverCategory}
		case ActionNames.UPDATE_RECEIVER_CATEGORY:
			return {...state,ReceiverCategory:null}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

function ReceiverCategoryProvider({ children }) {
	var [state, dispatch] = React.useReducer(ReceiverCategoryReducer, {
		ReceiverCategory: null,
		ReceiverCategories: [],
		error: null,
	})

	return (
		<ReceiverCategoryStateContext.Provider value={state}>
			<ReceiverCategoryDispatchContext.Provider value={dispatch}>
				{children}
			</ReceiverCategoryDispatchContext.Provider>
		</ReceiverCategoryStateContext.Provider>
	)
}

function useReceiverCategoryState() {
	var context = React.useContext(ReceiverCategoryStateContext)
	if (context === undefined) {
		throw new Error('useReceiverCategoryState must be used within a ReceiverCategoryProvider')
	}
	return context
}

function useReceiverCategoryDispatch() {
	var context = React.useContext(ReceiverCategoryDispatchContext)
	if (context === undefined) {
		throw new Error('useReceiverCategoryDispatch must be used within a ReceiverCategoryProvider')
	}
	return context
}

export { ReceiverCategoryProvider, useReceiverCategoryState, useReceiverCategoryDispatch }

