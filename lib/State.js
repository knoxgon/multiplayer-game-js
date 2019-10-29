class State {
  constructor(state) {
    this.state = state;
  }
  setState(state) {
    this.state = state;
  }
  stateHandler(state) {
    switch(state) {
      case state.MOVE:
        break;
      case state.THREAT:
        break;
      case state.FOLLOW:
        break;
      case state.ATTACK:
        break;
    }
  }
}