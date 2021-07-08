import {DefaultColors} from './Colors';
import {FontSizes} from './FontSize';
import {styles} from './Styles';
import {Margins} from './Margins';

const DefaultTheme = {
  name: 'Default',
  colors: DefaultColors,
  fontSizes: FontSizes,
  styles: styles,
  margins: Margins,
};

export function getTheme(theme) {
  if (theme === 'Ebike') {
    return DefaultTheme;
  } else {
    return DefaultTheme;
  }
}
