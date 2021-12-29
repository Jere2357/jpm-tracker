import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, FlatList, Alert } from 'react-native';

import { apiViewRegions } from '../../requests/CovidApi';

import ClickableItem from '../../globals/clickable_item/ClickableItem';

import routes from '../../globals/navigation/Routes';

import styles from './styles/CovidCountryStyles';

const CovidCountries = function ({ navigation }: any) {
  const [countries, setCountries] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  const handleGetRegions = async () => {
    setLoadingData(true);

    const apiResponse = await apiViewRegions();

    if (typeof apiResponse.data !== 'undefined') {
      const { data, status } = apiResponse;

      if (status === 200) {
        setCountries(data.data);
        setLoadingData(false);
      } else {
        Alert.alert('Catching Error!', 'Cannot fetch all the regions');
        setLoadingData(false);
      }
    }
  };

  const handleNavigateProvinces = (item: any) => {
    navigation.navigate(routes.COVID_PROVINCES, { item, title: item.name });
  };

  const renderItem = ({ item }: any) => (
    <ClickableItem
      item={item.name}
      onSubmit={() => handleNavigateProvinces(item)}
    />
  );

  useEffect(() => {
    handleGetRegions();
  }, []);

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Covid-19 Statistics</Text>

      {/* Region */}
      <Text style={styles.region}>List of Regions:</Text>

      {/* Lists */}
      {loadingData ? (
        <ActivityIndicator size="large" color="#6cf" />
      ) : (
        <FlatList
          data={countries}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          ListFooterComponent={() => <View style={styles.bottomComponent} />}
        />
      )}
    </View>
  );
};

export default CovidCountries;
