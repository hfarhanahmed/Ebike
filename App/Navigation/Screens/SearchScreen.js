import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import SearchCarItem from './Components/SearchCarItem';
import {useNavigation} from '@react-navigation/native';
import AppBarWithMenu from './Components/AppBarWithMenu';

import {getBikes} from '../../Services/API/AssetManagement';
import {useTheme} from '../../customHook/ThemeContext';
import Filters from './Components/Filters';
import ActivityIndicatorView from './Components/ActivityIndicatorView';

export default function SearchList() {
  const [assets, setAssets] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [activityIndicator, setActivityIndicator] = useState(false);
  const [filters, setFilters] = useState({
    category: {name: 'All', code: 'all'},
    frame: 'All',
    price: 10000,
  });
  const {theme} = useTheme();

  const navigation = useNavigation();

  const getBikesList = () => {
    setActivityIndicator(true);
    getBikes(filters.category.code)
      .then(response => {
        /* 
        These Filters should be done on Server side, due to the server 
        or APIs are not provided in the Test so we are unable to do that. 
        
        The data is being fetched from a mock API using Postman. A mock server is been created
        for the test only.
        */
        if (filters.frame === 'All' && filters.price === 10000) {
          setAssets(response);
        } else if (filters.frame === 'All') {
          const filteredAssets = response.filter(
            asset => asset.price <= filters.price,
          );
          setAssets(filteredAssets);
        } else {
          const filteredAssets = response.filter(
            asset =>
              String(asset.frameSize) === filters.frame &&
              asset.price <= filters.price,
          );
          setAssets(filteredAssets);
        }
        setActivityIndicator(false);
      })
      .catch(error => {
        console.log('Error', error);
        setActivityIndicator(false);
    });
  };

  useEffect(() => {
    getBikesList();
  }, []);

  return (
    <View>
      <ActivityIndicatorView showIndicator={activityIndicator} />
      <AppBarWithMenu
        title="Ebike"
        subtitle="The Future of mobility"
        onActionPress={() => {
          setShowFilters(!showFilters);
        }}
      />
      <Filters
        onPress={() => {
          setShowFilters(!showFilters);
          getBikesList();
        }}
        showFilters={showFilters}
        filters={filters}
      />
      <FlatList
        style={{
          margin: theme.margins.ListMargin,
        }}
        data={assets}
        keyExtractor={item => item._id}
        renderItem={asset => (
          <SearchCarItem
            asset={asset.item}
            onPress={asset => {
              navigation.navigate('Details', {...asset});
            }}
          />
        )}
      />
    </View>
  );
}
