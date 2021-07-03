import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initState = {
    expenses: null,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MONTHLY':
            return {
                ...state,
                expenses: action.payload
            }
    
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;