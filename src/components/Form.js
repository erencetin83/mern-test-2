import React from 'react';
import PropTypes from 'prop-types';
import Factory from './componentfactory';

class Form extends React.Component{

  static propTypes = {
    title : PropTypes.string.isRequired,
    formItems: PropTypes.array.isRequired
  }

  render() {

    return <div className="form">
      <div className="title">{this.props.title}</div>
      <div className="content row">
        {this.props.formItems.map( item => Factory.getComponent(item))}
      </div>
    </div>;
  }
}


export default Form;