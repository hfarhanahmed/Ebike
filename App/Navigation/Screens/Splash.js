import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { WhiteColor } from '../../Theme/Colors';

const Logo = require('../../../Assets/images/logo.png');
const win = Dimensions.get('window');
const { width, height } = Image.resolveAssetSource(Logo);
const ratio = (win.width - 100) / width; //541 is actual image width

export default function DetailsScreen() {
  return (
    <View
      style={{
        backgroundColor: WhiteColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          width: win.width - 100,
          height: height * ratio,
          marginTop: win.height / 2 - (height * ratio) / 2,
        }}
        source={Logo}
      />
    </View>
  );
}
