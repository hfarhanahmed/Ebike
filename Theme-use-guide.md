# Theme Use Guide

The purpose of this document is to discribe the using of theme within the code and how we are going to add things in the theme in future. This dcument will explain how to use the theme and how you can add new colors, margins and font sizes.

## Context Components
 When you get the theme context using context API it consists of 2 main object.
 1. theme
 2. changeTheme
 
 Now theme has further multiple objects as follows:
 1. colors
 2. fontSizes
 3. icons

## How to use Theme
There are 2 ways by which you can acccess the theme.

1) Import the context as below (The path will depend on the folder you are in)

> import ThemeContext from '../../customHook/ThemeContext';

then use ThemeContext.Consumer to access the context and get the theme just like context.theme

> <ThemeContecxt.Consumer >
      {(context) => (
      // .. your jsx here where you want to use the theme ..
      )}
</ThemeContecxt.Consumer>

OR you can get the theme directly like

> <ThemeContecxt.Consumer >
      {({ theme }) => (
      // .. your jsx here where you want to use the theme ..
      )}
</ThemeContecxt.Consumer>

2) This is by importing a hool "useTheme"

> import { useTheme } from '../../customHook/ThemeContext';

this hook will return the theme within any functional conponent on in any class by jesu calling it.

> const { theme } = useTheme();

actually the hook will return context but we only needed theme so are only getting { theme } if I want the whole object I can use it like:

const themeContext = useTheme();
then get the theme like
> const theme = themeContext.theme;

OR directly use it as 

> themeContext.theme.colors.primary

## How to update the theme

As it mentioned above that when you get context it will consist of 2 objects i.e {theme, changeTheme}
you can call changeTheme funtion with the valid theme name to set.
Example:

> <ThemeContecxt.Consumer >
      {({ theme, changeTheme }) => (
      // .. your jsx here where you want to use the theme ..
      ...
      <Button title='Change Theme' onPress={changeTheme(themeNameString)} />
      ...
      )}
</ThemeContecxt.Consumer>

OR

> const themeContext = useTheme();
return(
 <Button title='Change Theme' onPress={themeContext.changeTheme(themeNameString)} />
);

