import React, { Component } from 'react';
import ThemeContext from './ThemeContext';
import { getTheme } from '../Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
    this.state = { theme: getTheme(''), changeTheme: this.changeTheme };
    AsyncStorage.getItem('theme').then((value) => {
      if (value) {
        this.setState({
          theme: getTheme(value),
          changeTheme: this.changeTheme,
        });
      }
    });
  }
  changeTheme() {
    AsyncStorage.getItem('theme').then((value) => {
      this.setState((prevState) => {
        if (value === 'Default' || value === 'FairMini') {
          AsyncStorage.setItem('theme', 'Other');
          return {
            theme: getTheme('Other'),
            changeTheme: this.changeTheme,
          };
        } else {
          AsyncStorage.setItem('theme', 'FairMini');
          return {
            theme: getTheme('FairMini'),
            changeTheme: this.changeTheme,
          };
        }
      });
    });
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          changeTheme: this.state.changeTheme,
        }}
        theme={theme}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeProvider }; //, Consumer as ThemeConsumer
