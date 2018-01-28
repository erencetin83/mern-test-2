import React from 'react';
import PropTypes from 'prop-types';
import Factory from './componentfactory';

class Form extends React.Component{

  static propTypes = {
    formItems: PropTypes.array,
    title: PropTypes.string
  }

  render() {
    console.log(this.props);
    if (this.props.title == null){ return <div></div>; } 

    return <div className="form">
      <div className="title">{this.props.title}</div>
      <div className="content row">
        {this.props.formItems.map( formitem => Factory.getComponent(formitem))}
      </div>
    </div>;
  }
}


export default Form;