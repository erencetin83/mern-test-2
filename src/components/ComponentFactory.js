import React from 'react';

import Input from './formitem/Input';
import Combo from './formitem/Combo';
import Button from './formitem/Button';
import Radio from './formitem/Radio';

export default class ComponentFactory {

  static getComponent(item){
    switch(item.itemType){
    case 'input':
      return <Input {...item} key={item.code}/>;
    case 'combo':
      return <Combo {...item} key={item.code}/>;
    case 'radio':
      return <Radio {...item} key={item.code}/>;
    case 'button':
      return <Button {...item} key={item.code}/>; 
    default:
      throw 'invalid ItemType: ' + this.props.itemtype;
    }
  }

}


