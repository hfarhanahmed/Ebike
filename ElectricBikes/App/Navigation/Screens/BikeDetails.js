import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import TextLabel from './Components/TextLabel';
import PriceText from './Components/PriceText';
import { AirbnbRating } from 'react-native-ratings';
import BottomButton from './Components/BottomButton';
import { Banner } from 'react-native-paper';
import { getTheme } from '../../Theme';
import en from '../../locales/en-US';

export default function BikeDetails(props) {
  const [visible, setVisible] = React.useState(false);
  const asset = props.route.params;
  const theme = getTheme('');
  return (
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor: theme.colors.white,
        },
      ]}
    >
      <StatusBar style='light' />
      <Banner
        theme={theme.colors}
        visible={visible}
        actions={[
          {
            label: en.No,
            onPress: () => setVisible(false),
          },
          {
            label: en.ThankYou,
            onPress: () => setVisible(false),
          },
        ]}
        icon={({ size }) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}
      >
        Really! You think I am going to complete the whole journey in this week?
        Just Kidding !!!
      </Banner>
      <SliderBox
        images={asset.image}
        sliderBoxHeight={300}
        dotColor={theme.colors.primary}
        inactiveDotColor='#90A4AE'
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
      />
      <View style={styles.subContainer}>
        <View style={styles.row}>
          <View>
            <TextLabel
              text={asset.category}
              fontSize={theme.fontSizes.detailCategory}
              fontWeight='bold'
            />
            <TextLabel
              text={asset.name}
              fontSize={theme.fontSizes.detailName}
            />
          </View>
          <View style={styles.column}>
            <PriceText
              text={asset.price}
              fontSize={theme.fontSizes.priceDetailSize}
            />
            <AirbnbRating
              type='star'
              ratingCount={5}
              size={25}
              defaultRating={asset.rating}
              isDisabled={true}
              showRating={false}
              jumpValue={1}
            />
          </View>
        </View>
        <TextLabel
          style={styles.description}
          text={asset.description}
          fontSize={theme.fontSizes.LabelText}
        />
      </View>
      <BottomButton
        style={styles.button}
        title={en.Buy}
        onPress={() => {
          setVisible(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    margin: 20,
  },
  button: { marginLeft: 20, marginRight: 20, marginBottom: 30 },
  description: { marginTop: 40 },
  row: { flexDirection: 'row' },
  column: { flex: 1, alignItems: 'flex-end' },
});
