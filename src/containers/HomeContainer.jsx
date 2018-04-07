import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/home';

import Home from '../components/Home';

class HomeContainer extends Component {
  state = {
    isShown: false,
  }

  toggle = () => this.setState({isShown: !this.state.isShown});

  render() {
    console.log('isShown', this.state.isShown);
    console.log('isHome', this.props.isHome);

    return (
      <div>
        <Home />
        <button
          onClick={this.toggle}
        >
          isShown
        </button>
        <button
          onClick={this.props.actions.toggleHome}
        >
          toggleHome
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isHome: state.home.isHome,
});

const mapDispathToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(HomeContainer);
