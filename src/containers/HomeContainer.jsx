import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as homeActions from '../actions/home';

import Home from '../components/Home';

class HomeContainer extends Component {
  state = {
    isShown: false,
  }

  toggle = () => this.setState({ isShown: !this.state.isShown });

  render() {
    const { isShown } = this.state;
    const { isHome, actions } = this.props;

    console.log('isShown', isShown);
    console.log('isHome', isHome);

    return (
      <div>
        <Home />
        <button
          onClick={this.toggle}
        >
          isShown
        </button>
        <button
          onClick={actions.toggleHome}
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
  actions: bindActionCreators(homeActions, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(HomeContainer);
