import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import SearchCarItem from './Components/SearchCarItem';
import { search } from '../../Services/API/SearchManagement';

export default function SearchList() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    setAssets([{image:'https://cdn.shopify.com/s/files/1/1772/1703/t/16/assets/cowboy-3-removable-battery_2560x.jpg', price: 1299.0, category:'E City', frameSize: 54},{image:'https://i.guim.co.uk/img/media/3a98ccd37dfd7f3dc50cdd140052cc083397021b/498_182_2947_1770/master/2947.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=eb948b3c8d2b37ed7333dcb7e707caa3', price: 1149.0, category:'E Mountain Bike', frameSize: 48},{image:'https://fscl01.fonpit.de/userfiles/7687254/image/Cowboy_3/NextPit_Cowboy_3_bike.jpg', price: 1449.0, category:'E Mountain Bike', frameSize: 52}]);
    // search({
    //   location: 'All Locations',
    //   pageNo: 1,
    //   pageSize: 162,
    //   start: '2021-04-14T14:00:00.000Z',
    //   end: '2021-05-24T14:00:00.000Z',
    //   yearMin: 1950,
    //   priceMin: 0,
    //   priceMax: 20000,
    //   yearMax: 2020,
    // })
    //   .then((response) => {
    //     setAssets(response.data.assets);
    //   })
    //   .catch((error) => console.log('Error', error));
  }, []);

  return (
    <FlatList
      data={assets}
      keyExtractor={(item) => item._id}
      renderItem={(asset) => <SearchCarItem asset={asset.item} />}
    />
  );
}
