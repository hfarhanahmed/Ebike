import * as React from 'react';
import {View, Modal, Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const ActivityIndicatorView = props => {
  return (
    <Modal visible={props.showIndicator}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{marginBottom: 20}}>Leading, please wait!</Text>
        <ActivityIndicator
          animating={props.showIndicator}
          color={Colors.red800}
        />
      </View>
    </Modal>
  );
};

export default ActivityIndicatorView;
