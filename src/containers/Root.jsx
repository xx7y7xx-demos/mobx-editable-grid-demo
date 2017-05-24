import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

import Posts from './Posts';

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.appState = props.appState;
    this.handleAddRow = this.handleAddRow.bind(this);
  }
  componentWillMount() {
    this.appState.fetchPosts();
  }
  onReset = () => {
    this.appState.resetTimer();
  }
  handleAddRow() {
    this.appState.addEmptyPost();
  }
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.appState.timer}
        </button>
        <hr />
        <button onClick={this.handleAddRow}>Add row</button>
        <div className="App__body">
          <Posts posts={this.appState.posts} />
        </div>
        {/* <DevTools />*/}
      </div>
    );
  }
}

App.propTypes = {
  appState: PropTypes.shape({
    timer: PropTypes.number.isRequired,
    resetTimer: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
