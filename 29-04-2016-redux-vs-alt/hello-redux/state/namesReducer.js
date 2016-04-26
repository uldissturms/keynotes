const shouldGreet = name => {
  return name !== 'Stranger';
};

const namesReducer = (state = { names: [] },  action) => {
  if (action.type === 'GREET' && shouldGreet(action.payload.name)) {
    return { names: [...state.names, action.payload.name] };
  }
  return state;
};

export default namesReducer;
