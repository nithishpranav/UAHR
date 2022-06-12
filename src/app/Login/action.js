import * as actionTypes from './actionTypes';
import axios from 'axios';
import qs from 'qs';

const getProfileData = (payload) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload,
    };
}

const FetData = (payload) => {
    return async (dispath) =>{
        const response = await axios.post('http://localhost:5000/api/patient/login', qs.stringify(payload)).then ((res) => {
            console.log("Profile data",res.data)
            dispath(getProfileData(res.data));
        });

    }
}