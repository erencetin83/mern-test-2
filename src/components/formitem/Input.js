import React from 'react';
import FormItemProps from './FormItemProps';


class Input extends React.Component{

  static propTypes = FormItemProps.getPropType();

  render() {
    return  <div className={'form-group col-' + this.props.grid.container}>
      <div className="row">
        <label className={'col-'+this.props.grid.caption} htmlFor={this.props.code}>{this.props.caption}</label>
        <input type={this.props.itemprops.type} className={'form-control col-'+this.props.grid.control} id={this.props.code} defaultValue={this.props.value}/>
      </div></div>;
  }
}

export default Input;