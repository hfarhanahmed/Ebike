import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import TextLabel from './TextLabel';
import PriceText from './PriceText';
import { getTheme } from '../../../Theme';

const SearchCarItem = (props) => {
  const theme = getTheme('');

  const styles = StyleSheet.create({
    mainView: {
      marginTop: 6,
      marginBottom: 6,
      flex: 1,
      flexDirection: 'column',
      borderRadius: theme.margins.CardBorderRadius,
      elevation: theme.margins.CardElevation,
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.white,
    },
    contentContainer: {
      marginHorizontal: theme.margins.CardPaddingMainContainer,
      marginVertical: theme.margins.CardPaddingMainContainer,
      flexDirection: 'row',
    },
    boldText: {
      fontWeight: 'bold',
    },
    carImage: {
      height: theme.fontSizes.MainSearchImageHeight,
    },
  });

  return (
    <Card
      style={styles.mainView}
      elevation={theme.margins.CardElevation}
      onPress={() => {
        props.onPress(props.asset);
      }}
    >
      <View>
        <Image
          style={styles.carImage}
          source={{
            uri:
              props.asset.image && props.asset.image.length > 0
                ? props.asset.image[0]
                : '',
          }}
        />
        <View style={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            <TextLabel
              fontSize={theme.fontSizes.SearchCarTitleFont}
              fontWeight='bold'
              text={props.asset.category}
            />
            <TextLabel
              fontSize={theme.fontSizes.SearchCarTitleFont}
              fontWeight='normal'
              text={props.asset.name}
            />
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row' }}>
              <PriceText
                text={props.asset.price}
                fontSize={theme.fontSizes.priceSize}
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>
                <TextLabel
                  fontSize={theme.fontSizes.SearchCarTitleFont}
                  fontWeight='bold'
                  text='Frame '
                />
                {props.asset.frameSize}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default SearchCarItem;
