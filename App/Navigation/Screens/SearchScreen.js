import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import SearchCarItem from './Components/SearchCarItem';
import { getBikes } from '../../Services/API/AssetManagement';
import { useTheme } from '../../customHook/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export default function SearchList() {
  const [assets, setAssets] = useState([]);
  const { theme } = useTheme();

  const navigation = useNavigation();

  useEffect(() => {
    getBikes('')
      .then((response) => {
        setAssets(response);
      })
      .catch((error) => console.log('Error', error));
  }, []);

  return (
    <FlatList
      style={{ margin: theme.margins.ListMargin }}
      data={assets}
      keyExtractor={(item) => item._id}
      renderItem={(asset) => (
        <SearchCarItem
          asset={asset.item}
          onPress={(asset) => {
            navigation.navigate('Details', { ...asset });
          }}
        />
      )}
    />
  );
}
