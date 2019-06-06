export default function(state = [], action) {
    switch(action.type) {
        case 'GET_ALL_EMPLOYEES':
            return action.payload;
        case 'ADD_EMPLOYEE':
            action.payload.id = state.length+1;
            return state.concat(action.payload);
        default:
            return state;
    }
}