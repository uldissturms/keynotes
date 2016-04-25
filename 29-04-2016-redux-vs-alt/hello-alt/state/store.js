import alt from '../alt';
import namesActions from '../actions/NamesActions';
import namesProcessors from './namesProcessors'; 

class NamesStore {
  constructor() {
    this.bindListeners({ add: namesActions.ADD})
    this.state = {
      names: []
    }
  }

  add(name) {
    const newState = namesProcessors.add(this.state, name)
    this.setState(newState);
  }
}

export default alt.createStore(NamesStore, 'NamesStore');