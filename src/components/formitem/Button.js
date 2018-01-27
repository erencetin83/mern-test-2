import React from 'react';
import FormItemProps from './FormItemProps';

class Button extends React.Component{

  static propTypes = FormItemProps.getPropType();

  render() {
    return  <div className={'form-group col-' + this.props.grid.container}>
      <div className="row">
        <button type="button" id={this.props.code} className={'btn btn-' + this.props.itemprops.type}>{this.props.caption}</button>
      </div></div>;    
  }
}

export default Button;