export const friendsReducer = (state = [], action) => {
  console.log(action.payload)

  switch (action.type) {
    case 'GET_FRIENDS':
      return action.payload.data;
      // return [
      //   ...state,
      //     action.payload.data
      // ]
    default:
      return state
  }
}
