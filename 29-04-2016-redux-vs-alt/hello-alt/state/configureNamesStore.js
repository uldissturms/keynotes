import alt from '../alt';
import namesActions from '../actions/NamesActions';

class NamesStore {
  constructor() {
    this.bindListeners({ add: namesActions.ADD})
    this.state = {
      names: []
    }
  }
  add(name) {
    if (name === 'Stranger') {
      return this.state;
    }
    this.setState({ names: [...this.state.names, name] });
  }
}

export default function configureStore() {
  return alt.createStore(NamesStore, 'NamesStore');
}