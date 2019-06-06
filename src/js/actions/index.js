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