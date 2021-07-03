/**
 * @format
 */

import { Platform } from 'react-native';
import { DrivemateColors } from './Colors';

const fontFamilyName = {
  ...Platform.select({
    ios: {
      // museoSans100: 'MuseoSans-100',
      // museoSans100Italic: 'MuseoSans-100Italic',
      // museoSans300: 'MuseoSans-300',
      // museoSans300Italic: 'MuseoSans-300Italic',
      // museoSans500: 'MuseoSans-500',
      // museoSans500Italic: 'MuseoSans-500Italic',
      // museoSans700: 'MuseoSans-700',
      // museoSans700Italic: 'MuseoSans-700Italic',
      // museoSans900: 'MuseoSans-900',
      // museoSans900Italic: 'MuseoSans-900Italic',
      MINISansSerifBold: 'MINISansSerif-Bold',
      MINISansSerifRegular: 'MINISansSerif-Regular',
    },
    android: {
      // museoSans100: 'MuseoSans_100',
      // museoSans100Italic: 'MuseoSans_100_Italic',
      // museoSans300: 'MuseoSans_300',
      // museoSans300Italic: 'MuseoSans_300_Italic',
      // museoSans500: 'MuseoSans_500',
      // museoSans500Italic: 'MuseoSans_500_Italic',
      // museoSans700: 'MuseoSans_700',
      // museoSans700Italic: 'MuseoSans_700_Italic',
      // museoSans900: 'MuseoSans_900',
      // museoSans900Italic: 'MuseoSans_900_Italic',
      MINISansSerifBold: 'MINISansSerif-Bold',
      MINISansSerifRegular: 'MINISansSerif-Regular',
    },
  }),
};

const WEIGHT = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  ultraBold: '900',
};

const FONT_FAMILY = {
  thin: {
    fontFamily: fontFamilyName.MINISansSerifRegular,
  },

  medium: {
    fontFamily: fontFamilyName.MINISansSerifRegular,
    
  },
  semiBold: {
    fontFamily: fontFamilyName.MINISansSerifRegular, //600
    fontWeight: WEIGHT.semiBold,
  },
  bold: {
    fontFamily: fontFamilyName.MINISansSerifBold,
    fontWeight: WEIGHT.bold,
  },
  extraBold: {
    fontFamily: fontFamilyName.MINISansSerifBold, //800
    fontWeight: WEIGHT.extraBold,
  },
  ultraBold: {
    fontFamily: fontFamilyName.MINISansSerifBold,
  },
};

const SIZE = {
  h1: 96,
  h2: 60,
  h3: 48,
  h4: 32,
  h5: 24,
  h6: 20,
  h7: 16,
  subtitle1: 16,
  subtitle2: 14,
  body1: 16,
  body2: 14,
  button: 14,
  caption: 12,
  label2: 11,
  overline: 10,
};

const transforms = {
  sentence: 'none',
  title: 'capitalize',
  allCaps: 'uppercase',
};

const Fonts = {
  h3: {
    ...FONT_FAMILY.regular,
    color: DrivemateColors.textColorPrimary,
    fontSize: SIZE.h3,
  },
  h4: {
    ...FONT_FAMILY.regular,
    color: DrivemateColors.drive,
    fontSize: SIZE.h4,
  },
  h5: {
    ...FONT_FAMILY.regular,
    color: DrivemateColors.textColorPrimary,
    fontSize: SIZE.h6,
  },
  h6: {
    ...FONT_FAMILY.medium,
    color: DrivemateColors.textColorPrimary,
    fontSize: SIZE.h6,
  },
  h7: {
    ...FONT_FAMILY.bold,
    color: DrivemateColors.textColorPrimary,
    fontSize: SIZE.h7,
    fontStyle: 'normal',
  },
  subtitle1: {
    ...FONT_FAMILY.regular,
    color: DrivemateColors.textColorPrimary,
    fontSize: SIZE.subtitle1,
    textTransform: transforms.title,
    letterSpacing: 0.15,
  },
  subtitle2: {
    ...FONT_FAMILY.medium,
    color: DrivemateColors.textColorPrimary,
    fontSize: SIZE.subtitle2,
  },
  body1: {
    ...FONT_FAMILY.regular,
    color: DrivemateColors.textColorPrimary,
    fontSize: SIZE.body1,
  },
  body2: {
    ...FONT_FAMILY.regular,
    color: DrivemateColors.textColorSecondary,
    fontSize: SIZE.body2,
  },
  BUTTON: {
    ...FONT_FAMILY.semiBold,
    color: DrivemateColors.textColorPrimary,
    fontSize: SIZE.button,
    textTransform: transforms.allCaps,
  },
  caption: {
    ...FONT_FAMILY.regular,
    color: DrivemateColors.textColorSecondary,
    fontSize: SIZE.caption,
  },
  label2: {
    ...FONT_FAMILY.regular,
    fontSize: SIZE.label2,
  },
  caption3: {
    ...FONT_FAMILY.light,
    color: DrivemateColors.blackColor,
    fontSize: SIZE.caption,
  },
  OVERLINE: {
    ...FONT_FAMILY.regular,
    color: DrivemateColors.textColorSecondary,
    fontSize: SIZE.overline,
    textTransform: transforms.allCaps,
  },
  navigationTitle: {
    ...FONT_FAMILY.bold,
  },
  bottomTabText: {
    ...FONT_FAMILY.medium,
  },
};

export default Fonts;
