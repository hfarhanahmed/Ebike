// import {useTheme} from '../customHook/ThemeContext';
import {getTheme} from '../Theme';

export function Styles() {
  const theme = getTheme('');
  return {
    bottomButton: {
      alignItems: 'center',
      backgroundColor: theme.colors.buttonPrimary,
      borderRadius: 2,
      padding: 15,
    },
    textInput: {
      flexDirection: 'row',
      color: theme.colors.text,
      backgroundColor: theme.colors.whiteColor,
      borderColor: theme.colors.dividerLineColor,
      borderRadius: 2,
      borderWidth: 2,
      padding: 15,
    },
    textLabel: {
      color: theme.colors.text,
      fontSize: theme.fontSizes.LabelText,
    },
  };
}
