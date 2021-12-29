import React, { useState, useEffect } from 'react';
import {
  Alert,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  Linking,
} from 'react-native';

import { apiViewAllAirlines, apiViewAirline } from '../../requests/AirlinesApi';

import ClickableItem from '../../globals/clickable_item/ClickableItem';
import ModalView from '../../globals/modal/OverlayView';

import styles from './styles/AirlinesStyles';

const Airlines = function () {
  const [airlines, setAirlines] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [airlineDetails, setAirlineDetails] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const handleGetAllAirlines = async () => {
    const apiResponse = await apiViewAllAirlines();

    if (typeof apiResponse.data !== 'undefined') {
      const { data, status } = apiResponse;

      if (status === 200) {
        setAirlines(data);
      } else {
        Alert.alert('Catching Error!', 'Cannot fetch all the airlines');
      }
    }
  };

  const handleGetAirline = async (code: any) => {
    setIsLoading(true);

    const apiResponse = await apiViewAirline(code);

    if (typeof apiResponse.data !== 'undefined') {
      const { data, status } = apiResponse;

      if (status === 200) {
        setAirlineDetails(data[0]);
        setIsLoading(false);
      } else {
        Alert.alert('Catching Error!', 'Cannot fetch the airline details');
        setIsLoading(false);
        setModalVisible(false);
      }
    }
  };

  const handleToggleModal = (value: any) => {
    if (isModalVisible) {
      setAirlineDetails({});
    } else {
      handleGetAirline(value);
    }
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }: any) => (
    <ClickableItem
      item={item.name}
      onSubmit={() => handleToggleModal(item.iata_code)}
    />
  );

  const handleOpenUrl = async (url: any) =>
    url
      ? await Linking.openURL(url)
      : Alert.alert(`Don't know how to open this url`);

  useEffect(() => {
    handleGetAllAirlines();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>List of Airlines</Text>

        {/* Lists */}
        <FlatList
          data={airlines}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          ListFooterComponent={() => <View style={styles.bottomComponent} />}
        />
      </View>

      {/* Modal view for airline details */}
      <ModalView visible={isModalVisible} toggle={handleToggleModal}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#6cf" />
        ) : (
          <>
            <Text style={styles.textPrimary}>{airlineDetails.name}</Text>
            <Text style={styles.textSecondary}>
              Please visit the link below:
            </Text>
            <Text
              onPress={() => handleOpenUrl(airlineDetails.website)}
              style={styles.link}
            >
              {airlineDetails.website}
            </Text>
          </>
        )}
      </ModalView>
    </>
  );
};

export default Airlines;
