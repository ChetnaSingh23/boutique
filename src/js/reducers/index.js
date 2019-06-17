import { combineReducers } from 'redux';
import EmployeesReducer from './reducer_employees';
import WomenReducer from './reducer_women';
import UserProfileReducer from './reducer_userprofile';

const rootReducer = combineReducers({
    user: UserProfileReducer,
    women: WomenReducer,
    employees: EmployeesReducer
});

export default rootReducer;