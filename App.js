import React, {useEffect, useState} from 'react';
import Container from './App/Navigation/Container/Container';
import Splash from './App/Navigation/Screens/Splash';
// import codePush from 'react-native-code-push';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

import {initializeLanguage} from './App/locales/index';
import {ThemeProvider} from './App/customHook/ThemeProvider';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
    initializeLanguage().then(response => {
      setIsLoaded(response);
    });
  }, []);

  if (isLoaded) {
    return (
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    );
  } else {
    return (
      <View>
        <Splash />
      </View>
    );
  }
};

// export default codePush(codePushOptions)(App);
export default App;
