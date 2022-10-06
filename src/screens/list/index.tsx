import React from 'react';
import {ScrollView, FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ListData from '../../utils/fake-data';
import {ListItem} from './components/item';

export interface IListItem {
  id: string;
  name: string;
  description: string;
  price: string;
  salePrice: any;
  brand: string;
}

const ListScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <View>
        <FlatList
          data={ListData}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item, index}) => {
            return <ListItem key={item.id} item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
