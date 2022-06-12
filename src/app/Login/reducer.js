import * as actiontypes from './action';

const initState = {
    isLoggedIn : false,
    currentCustomer : null
};

const patientReducer = (state = initState, action) => {
    switch (action.type) {
        case actiontypes.LOGIN_SUCCESS:
            return {
                ...state,
                currentCustomer: {
                    firstname : action.payload.firstname,
                    lastname : action.payload.lastname,
                    gender : action.payload.gender,
                    email : action.payload.email,
                    token : action.payload.token,
                }
            }
        }
}

export {patientReducer};