import React from 'react';
import FormItemProps from './FormItemProps';


class Combo extends React.Component{


  static propTypes = FormItemProps.getPropType();

  render() {
    return  <div className={'form-group col-' + this.props.grid.container}>
      <div className="row">
        <label className={'col-'+this.props.grid.caption} htmlFor={this.props.code}>{this.props.caption}</label>
        <select className={'form-control col-'+this.props.grid.control} id={this.props.code} >
          {this.props.itemprops.list.map(
            function(listitem){
              return <option key={listitem.code} code={listitem.code}>{listitem.description}</option>;
            })}
        </select>
      </div></div>;    
  }
}

export default Combo;