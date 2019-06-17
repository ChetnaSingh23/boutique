import axios from 'axios';

export function addEmployee(employee) {
    return {
        type: 'ADD_EMPLOYEE',
        payload: employee
    }
}
export function getAllData() {
    const request = axios.get('http://localhost:3000/employees');
    return (dispatch) => {
        request.then((data) => {
            dispatch({type: 'GET_ALL_EMPLOYEES', payload: data.data});
        })
    }
}
export function getAllProduct() {
    console.log('inside get all product');
    const request = axios.get('http://localhost:3000/women');
    return(dispatch) => {
        request.then((res) => {
            console.log('response in action',res);
            dispatch({type: 'GET_ALL_PRODUCTS', payload: res.data });
        })
    }
}

export function getUserProfile() {
    console.log('inside get user profile');
    const req = axios.get('http://localhost:3000/user');
    return(dispatch) => {
        req.then((res) => {
            console.log('user profile response in action', res);
            dispatch({type: 'GET_USER_PROFILE', payload: res.data});
        })
    }
}