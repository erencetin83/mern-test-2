import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Header from './Header';
import Form from './Form';

class App extends React.Component{

  static propTypes = {
    initialForms: PropTypes.array
  }

  state = {
    pageHeader: 'Simple Bootstrap form renderer!!!!',
    forms: this.props.initialForms
  };
 
  componentDidMount () {
    axios.get('/api/forms')
      .then(resp => {
        this.setState({
          forms : resp.data.forms
        });
      })
      .catch(console.error);
   
  }

  componentWillUnmount() {
    console.info('App will unmount');
  }

  render() {
    console.log(this.state.forms);
    let mydiv = <div></div>;
    
    if (this.state.forms)
      mydiv = <div>{this.state.forms.map(form => <Form key={form.__id} {...form} />)} </div>;
      
    return (
      <div>
        <Header message={this.state.pageHeader}/>
        {mydiv}
      </div>
    );
  }
}

export default App;