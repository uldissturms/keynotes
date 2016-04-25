const processor = {
  add(state, name) {
    if (name === 'Stranger') {
      return state;
    }
    return { names: [...state.names, name] };
  }
};

export default processor;
