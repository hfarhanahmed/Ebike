import {DefaultColors } from './Colors';
import {FontSizes} from './FontSize';
// import {Styles} from './Styles';
import {Margins} from './Margins';

const DefaultTheme = {
  name: 'Default',
  colors: DefaultColors,
  fontSizes: FontSizes,
  // styles: Styles,
  margins: Margins,
};

export function getTheme(theme) {
  if (theme === 'Ebike') {
    return DefaultTheme;
  } else {
    return DefaultTheme;
  }
}
