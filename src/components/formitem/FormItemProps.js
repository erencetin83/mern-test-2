import PropTypes from 'prop-types';

export default class FormItemProps {
  static getPropType() {
    return {
      grid : PropTypes.object.isRequired,
      code : PropTypes.string.isRequired,
      itemprops : PropTypes.object,
      caption : PropTypes.string
    };
  }
}