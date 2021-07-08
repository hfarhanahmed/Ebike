import * as React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Modal, Text, RadioButton} from 'react-native-paper';
import Slider from '@react-native-community/slider';

import TextLabel from './TextLabel';
import {useTheme} from '../../../customHook/ThemeContext';
import BottomButton from './BottomButton';

const Filters = props => {
  const [visible, setVisible] = React.useState(false);
  const [frameVisible, setFrameVisible] = React.useState(false);
  const [price, setPrice] = React.useState(50);
  const {theme} = useTheme();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showFrameModal = () => setFrameVisible(true);
  const hideFrameModal = () => setFrameVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
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
    text: {textAlign: 'center'},
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
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.filter}
              activeOpacity={0.85}
              onPress={() => {
                showModal();
              }}>
              <TextLabel style={styles.text} text="Category" fontSize={20} />
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
              }}>
              <TextLabel style={styles.text} text="Frame" fontSize={20} />
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
            }}>
            <TextLabel
              style={styles.text}
              text={`Price ${price}`}
              fontSize={20}
            />
            <Slider
              minimumValue={50}
              maximumValue={10000}
              onValueChange={newValue => {
                newFilter.price = newValue;
                setPrice(newValue);
              }}
              minimumTrackTintColor={theme.colors.primary}
              maximumTrackTintColor="#000000"
              value={price}
              step={10}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={styles.buttonsContainer}
              activeOpacity={0.85}
              onPress={() => {
                newFilter.category = {name: 'All', code: 'all'};
                newFilter.frame = 'All';
                newFilter.price = 10000;
                props.onPress();
              }}>
              <TextLabel
                style={styles.clearFilter}
                text="Clear Filters"
                fontSize={14}
              />
            </TouchableOpacity>
            <BottomButton
              style={{flex: 1, marginLeft: 10, marginRight: 10}}
              onPress={() => {
                props.onPress();
              }}
              title="Apply Filters"
            />
          </View>

          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <View>
              <TextLabel
                style={{alignSelf: 'center'}}
                text="Categories"
                fontSize={theme.fontSizes.BigPriceFont}
                fontWeight="bold"
              />
              <RadioButton.Group
                onValueChange={newValue => {
                  if (newValue === 'all') {
                    newFilter.category = {code: 'all', name: 'All'};
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
                value={newFilter.category.code}>
                <View style={styles.radioButton}>
                  <RadioButton value="all" />
                  <Text>All</Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value="mountainbike" />
                  <Text>E Mountain Bikes</Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value="citybike" />
                  <Text>E City Bikes</Text>
                </View>
              </RadioButton.Group>
            </View>
          </Modal>

          <Modal
            visible={frameVisible}
            onDismiss={hideFrameModal}
            contentContainerStyle={containerStyle}>
            <View>
              <TextLabel
                style={{alignSelf: 'center'}}
                text="Frame Sizes"
                fontSize={theme.fontSizes.BigPriceFont}
                fontWeight="bold"
              />
              <RadioButton.Group
                onValueChange={newValue => {
                  newFilter.frame = newValue;
                  hideFrameModal();
                }}
                value={newFilter.frame}>
                <View style={styles.radioButton}>
                  <RadioButton value="All" />
                  <Text>All</Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value="48" />
                  <Text>48</Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value="52" />
                  <Text>52</Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton value="54" />
                  <Text>54</Text>
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
