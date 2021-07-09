import {
  DevSettings,
  NativeModules,
  Platform,
  SegmentedControlIOSBase,
} from 'react-native';
import {some, isEmpty} from 'lodash';

const I18n = require('i18n-js');
import en from './en-US';
import pt from './pt-BR';
import ar from './ar';

import AsyncStorage from '@react-native-async-storage/async-storage';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
  ar_US: 'ar',
};

const getLanguageByDevice = () =>
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

I18n.fallbacks = true;

I18n.translations = {
  en: en,
  pt_BR: pt,
  ar: ar,
  fr: ar,
};

const getData = async () => {
  try {
    let value = await AsyncStorage.getItem('language');
    console.log('value', value);
    let language = '';

    if (value == null) {
      language = getLanguageByDevice();
    } else {
      language = value;
    }

    if (language != null) {
      console.log('stored language ', value);

      console.log('setLanguageToI18n ', language);

      const translateNormalize = normalizeTranslate[language];
      const iHaveThisLanguage = I18n.translations.hasOwnProperty(
        translateNormalize,
      );
      iHaveThisLanguage
        ? (I18n.locale = translateNormalize)
        : (I18n.defaultLocale = 'en_US');
    }
  } catch (e) {
    console.log('get data error');
  }
};

export const setLanguageToAr = () => {
  const language = 'ar_US';

  storeData(language);
};

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('language', value);
    // DevSettings.reload();
  } catch (e) {
    console.log('store data error');
  }
};
const setLanguageToI18n = async () => {
  let storedLanguage = await getData();
};

export const initializeLanguage = async () => {
  await setLanguageToI18n();
  return new Promise((done) => {
    done(true);
  });
};

setLanguageToI18n();

export const translate = (key) => I18n.t(key);

export default I18n;
