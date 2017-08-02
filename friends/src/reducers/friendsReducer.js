export const friendsReducer = (state = [], action) => {

  switch (action.type) {
    case 'GET_FRIENDS':
      return action.payload.data;
    default:
      return state
  }
}
