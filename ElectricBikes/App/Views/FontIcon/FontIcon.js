import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import PropTypes from 'prop-types';
import selection from './selection';

type Props = TextProps & {
  style?: TextStyle,
  name: string,
};

const CODES = (selection.icons: [mixed]).reduce(
  (names, { properties: { name, code } }) => {
    names[name] = code;
    return names;
  },
  Object.create(null)
);

const FontIcon = ({ style: styleProp = {}, name, ...props }: Props) => {
  if (name && !FontIcon.names[name]) {
    throw Error(
      `Invalid props.name: "${name}" \n${'possible'} values: ${JSON.stringify(
        [...Object.keys(FontIcon.names).sort()],
        null,
        2
      )}`
    );
  }

  const style = StyleSheet.flatten(styleProp);

  const {
    fontSize = 24,
    color = 'black',
    textAlign = 'center',
  } = (style: TextStyle);

  const styles = [
    style,
    {
      fontFamily: selection.preferences.fontPref.metadata.fontFamily,
      fontSize: fontSize,
      color: color, //TODO: set color from theme e.g themes.colors.red color
      minWidth: fontSize,
      minHeight: fontSize,
      textAlign: textAlign,
    },
  ];
  return (
    <Text style={styles} {...props}>
      {String.fromCharCode(CODES[name])}
    </Text>
  );
};

FontIcon.names = Object.keys(CODES).reduce((names, key) => {
  names[key] = key;
  console.log(names[key]); //TODO: Remove this console later, just added to check available icons names
  return names;
}, Object.create(null));

FontIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FontIcon;
