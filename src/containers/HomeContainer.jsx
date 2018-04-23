import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as homeActions from '../actions/home';

import About from '../components/About';

class HomeContainer extends Component {
  state = {
    isShown: false,
  }

  toggle = () => this.setState({ isShown: !this.state.isShown });

  render() {
    const { isShown } = this.state;
    const { isHome, actions } = this.props;

    return (
      <div>
        <About />
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
