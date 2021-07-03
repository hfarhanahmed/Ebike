import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../customHook/ThemeContext';
import TextLabel from './TextLabel';

const SearchCarItem = (props) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    mainView: {
      marginHorizontal: theme.margins.MarginHorizontal,
      marginVertical : theme.margins.MarginVertical,
      flex: 1,
      flexDirection: 'column',
      borderRadius: theme.margins.CardBorderRadius,
      overflow: 'hidden',
      elevation: theme.margins.CardElevation,
      backgroundColor: theme.colors.WhiteColor,
      borderColor: theme.colors.WhiteColor,
    },
    carMakeTitle: {
      fontSize: theme.fontSizes.SearchCarTitleFont,
      fontWeight: 'bold',
    },
    contentContainer: {
      marginHorizontal: theme.margins.CardPaddingMainContainer,
      marginVertical:theme.margins.CardPaddingMainContainer,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.DividerLineColor,
    },
    bottomContainer: {
      margin: theme.margins.MarginVertical,
      paddingBottom: theme.margins.CardPaddingFive,
      flexDirection: 'row',
    },
    boldText: {
      fontWeight: 'bold',
    },
    carImage: {
      height: theme.fontSizes.MainSearchImageHeight,
    },
    priceTag: {
      fontSize: theme.fontSizes.BigPriceFont,
      fontWeight: 'bold',
    },
    icon: {
      fontSize: 32,
      color: 'black', //TODO: theme.colors.primaryColor
    },
  });

  return (
    <TouchableOpacity>
      <View style={[styles.mainView]}>
        <Image
          style={styles.carImage}
          source={{ uri: props.asset.image }}
        />
        <View style={[styles.contentContainer]}>
          <View style={{ flex: 1 }}>
            <TextLabel
              fontSize={theme.fontSizes.SearchCarTitleFont}
              fontWeight='bold'
              text={props.asset.category}
            />
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.boldText}> No trip</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>{props.asset.frameSize}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCarItem;
