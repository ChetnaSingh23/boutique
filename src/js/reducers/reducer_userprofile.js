export default function(state = [], action) {
  switch(action.type) {
      case 'GET_USER_PROFILE':
          console.log('inside reducer userprofile', action);
          return action.payload;
      default:
          return state;
  }
}