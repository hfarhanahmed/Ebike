import React from 'react';
import { Text, StyleSheet, View, Button, DevSettings } from 'react-native';
import { translate, setLanguageToAr } from '../../locales';
import config from 'react-native-config';
import ThemeContext from '../../customHook/ThemeContext';
// import Map from './Components/Map';

export default function BikeDetails(props) {
  console.log(props.route.params);
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <View
          style={[
            styles.mainContainer,
            {
              backgroundColor: context.theme.colors.PrimaryColor,
            },
          ]}
        >
          <Text>Home Screen</Text>
          <Button title='Change Theme' onPress={context.changeTheme} />
          <Text>i18N Translations!!!</Text>
          <Text>{translate('hello')}</Text>
          <Text>{config.ENVIRONMENT}</Text>
          <Button
            title='Press me'
            onPress={() => {
              setLanguageToAr();
              DevSettings.reload();
            }}
          />
          <View>{/* <Map /> */}</View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
