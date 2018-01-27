import React from 'react';
import PropTypes from 'prop-types';

import Input from './formitem/Input';
import Combo from './formitem/Combo';
import Button from './formitem/Button';

export default class ComponentFactory {

  static getComponent(item){
    switch(item.itemType){
    case 'input':
      return <Input {...item} key={item.code}/>;
    case 'combo':
      return <Combo {...item} key={item.code}/>;
    case 'button':
      return <Button {...item} key={item.code}/>; 
    default:
      throw 'invalid ItemType: ' + this.props.itemtype;
    }
  }

}

export class ComponentProps {
  static getPropType() {
    return {
      grid : PropTypes.object.isRequired,
      code : PropTypes.string.isRequired,
      itemprops : PropTypes.object,
      caption : PropTypes.string
    };
  }
}
