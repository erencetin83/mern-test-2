import React from 'react';
import PropTypes from 'prop-types';

import Factory from './ComponentFactory';
import Header from './Header';

class App extends React.Component{
  
  static propTypes = {
    forms : PropTypes.array.isRequired
  }

  state = {
    pageHeader: 'Simple Bootstrap form renderer!!!!'
  };
 
  componentDidMount () {
    console.info('App mounted');
  }

  componentWillUnmount() {
    console.info('App will unmount');
  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader}/>
        <div>{this.props.forms[0].formItems.map(item => Factory.getComponent(item))}</div>
      </div>
    );
  }
}

export default App;