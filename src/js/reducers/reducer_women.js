export default function(state = [], action) {
  switch(action.type) {
      case 'GET_ALL_PRODUCTS':
          console.log('inside reducer women', action);
          return action.payload;
      default:
          return state;
  }
}