import * as React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Modal, Text, RadioButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';

import TextLabel from './TextLabel';
import BottomButton from './BottomButton';
import { getTheme } from '../../../Theme';
import en from '../../../locales/en-US';

const Filters = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [frameVisible, setFrameVisible] = React.useState(false);
  const [price, setPrice] = React.useState(50);
  const theme = getTheme('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showFrameModal = () => setFrameVisible(true);
  const hideFrameModal = () => setFrameVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const newFilter = props.filters;
  if (newFilter.price != price) {
    setPrice(newFilter.price);
  }

  const styles = StyleSheet.create({
    mainContainer: {
      padding: 20,
      marginLeft: 20,
      marginRight: 20,
      borderBottomLeftRadius: theme.margins.CardBorderRadius,
      borderBottomRightRadius: theme.margins.CardBorderRadius,
      overflow: 'hidden',
      elevation: theme.margins.CardElevation,
      backgroundColor: '#ececec',
      borderColor: theme.colors.white,
    },
    text: { textAlign: 'center' },
    filter: {
      margin: 5,
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 6,
    },
    clearFilter: {
      textAlign: 'right',
      alignSelf: 'center',
    },
    buttonsContainer: {
      width: '25%',
      alignSelf: 'flex-end',
      margin: 10,
    },
    radioButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  return (
    <>
      {props.showFilters && (
        <View style={styles.mainContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.filter}
              activeOpacity={0.85}
              onPress={() => {
                showModal();
              }}
            >
              <TextLabel style={styles.text} text={en.Category} fontSize={20} />
              <TextLabel
                style={styles.text}
                text={newFilter.category.name}
                fontSize={14}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filter}
              activeOpacity={0.85}
              onPress={() => {
                showFrameModal();
              }}
            >
              <TextLabel style={styles.text} text={en.Frame} fontSize={20} />
              <TextLabel
                style={styles.text}
                text={newFilter.frame}
                fontSize={14}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 30,
              margin: 5,
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 6,
            }}
          >
            <TextLabel
              style={styles.text}
              text={`${en.Price} ${price}`}
              fontSize={20}
            />
            <Slider
              minimumValue={50}
              maximumValue={10000}
              onValueChange={(newValue) => {
                newFilter.price = newValue;
                setPrice(newValue);
              }}
              minimumTrackTintColor={theme.colors.primary}
              maximumTrackTintColor='#000000'
              value={price}
              step={10}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              style={styles.buttonsContainer}
              activeOpacity={0.85}
              onPress={() => {
                newFilter.category = { name: 'All', code: 'all' };
                newFilter.frame = 'All';
                newFilter.price = 10000;
                props.onPress();
              }}
            >
              <TextLabel
                style={styles.clearFilter}
                text={en.ClearFilters}
                fontSize={14}
              />
            </TouchableOpacity>
            <BottomButton
              style={{ flex: 1, marginLeft: 10, marginRight: 10 }}
              onPress={() => {
                props.onPress();
              }}
              title={en.ApplyFilters}
            />
          </View>

          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <View>
              <TextLabel
                style={{ alignSelf: 'center' }}
                text={en.Categories}
                fontSize={theme.fontSizes.BigPriceFont}
                fontWeight='bold'
              />
              <RadioButton.Group
                onValueChange={(newValue) => {
                  if (newValue === 'all') {
                    newFilter.category = { code: 'all', name: 'All' };
                  } else {
                    newFilter.category = {
                      code: newValue,
                      name:
                        newValue == 'mountainbike'
                          ? 'E Mountain Bikes'
                          : 'E City Bikes',
                    };
                  }
                  hideModal();
                }}
                value={newFilter.category.code}
              >
                <View style={styles.radioButton}>
                  <RadioButton value='all' />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                      newFilter.category = {
                        code: 'all',
                        name: 'All',
                      };
                      hideModal();
                    }}
                  >
                    <Text>All</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value='mountainbike' />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                      newFilter.category = {
                        code: 'mountainbike',
                        name: 'E Mountain Bikes',
                      };
                      hideModal();
                    }}
                  >
                    <Text>E Mountain Bikes</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value='citybike' />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                      newFilter.category = {
                        code: 'citybike',
                        name: 'E City Bikes',
                      };
                      hideModal();
                    }}
                  >
                    <Text>E City Bikes</Text>
                  </TouchableOpacity>
                </View>
              </RadioButton.Group>
            </View>
          </Modal>

          <Modal
            visible={frameVisible}
            onDismiss={hideFrameModal}
            contentContainerStyle={containerStyle}
          >
            <View>
              <TextLabel
                style={{ alignSelf: 'center' }}
                text={en.FrameSizes}
                fontSize={theme.fontSizes.BigPriceFont}
                fontWeight='bold'
              />
              <RadioButton.Group
                onValueChange={(newValue) => {
                  newFilter.frame = newValue;
                  hideFrameModal();
                }}
                value={newFilter.frame}
              >
                <View style={styles.radioButton}>
                  <RadioButton value='All' />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                      newFilter.frame = 'All';
                      hideFrameModal();
                    }}
                  >
                    <Text>All</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value='48' />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                      newFilter.frame = '48';
                      hideFrameModal();
                    }}
                  >
                    <Text>48</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value='52' />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                      newFilter.frame = '52';
                      hideFrameModal();
                    }}
                  >
                    <Text>52</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value='54' />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                      newFilter.frame = '54';
                      hideFrameModal();
                    }}
                  >
                    <Text>54</Text>
                  </TouchableOpacity>
                </View>
              </RadioButton.Group>
            </View>
          </Modal>
        </View>
      )}
    </>
  );
};

export default Filters;
