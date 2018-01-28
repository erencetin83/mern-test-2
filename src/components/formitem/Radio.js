import React from 'react';
import FormItemProps from './FormItemProps';

class Radio extends React.Component {

  static propTypes = FormItemProps.getPropType();

  render() {

    let code = this.props.code;
    console.info(code);
    
    return <div className = {'form-group col-' + this.props.grid.container} >
      <div className = "row" >
        <label  className = {'col-' + this.props.grid.caption}
          htmlFor = {this.props.code}> 
          {this.props.caption} 
        </label> 
        <div  className = {'form-control col-' + this.props.grid.control} id = {this.props.code}> 
        {this.props.itemprops.list.map(
          function (listitem) { 
            return <label key = {listitem.code} className = "radio-inline" >
              <input  type = "radio" name={code} code = {listitem.code}/>  
              {listitem.description} 
            </label>;
          })}
      </div>
      </div>
    </div>;
  }

}

export default Radio;