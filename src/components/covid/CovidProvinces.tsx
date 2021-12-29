import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, FlatList, Alert } from 'react-native';
import moment from 'moment';

import { apiViewProvinces, apiViewReports } from '../../requests/CovidApi';

import ClickableItem from '../../globals/clickable_item/ClickableItem';
import Header from '../../globals/header/Header';
import EmptyHeader from '../../globals/header/EmptyHeader';
import ModalView from '../../globals/modal/OverlayView';

import { numberWithComma } from '../../globals/Helpers';
import { CovidIcon } from '../../globals/Icons';

import styles from './styles/CovidCountryStyles';

const CovidProvinces = function ({ navigation, route }: any) {
  const [provinces, setProvinces] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  const [covidDetails, setCovidDetails] = useState({});
  const [activeProvince, setActiveProvince] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const items = route.params.item;

  const handleNullChecker = (value: any) => value || 'N/A';

  const handleGetProvinces = async () => {
    setLoadingData(true);

    const apiResponse = await apiViewProvinces(items.iso);

    if (typeof apiResponse.data !== 'undefined') {
      const { data, status } = apiResponse;

      if (status === 200) {
        setProvinces(data.data);
        setLoadingData(false);
      } else {
        Alert.alert('Catching Error!', 'Cannot fetch all the provinces');
        setLoadingData(false);
      }
    }
  };

  const handleGetReports = async (region: any) => {
    setIsLoading(true);

    const apiResponse = await apiViewReports(region);

    if (typeof apiResponse.data !== 'undefined') {
      const { data, status } = apiResponse;

      if (status === 200) {
        setCovidDetails(data.data[0]);
        setActiveProvince(region);
        setIsLoading(false);
      } else {
        Alert.alert('Catching Error!', 'Cannot fetch all the provinces');
        setIsLoading(false);
      }
    }
  };

  const handleToggleModal = (value: any) => {
    if (isModalVisible) {
      setCovidDetails({});
      setActiveProvince('');
    } else {
      handleGetReports(value);
    }
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }: any) =>
    item.province ? (
      <ClickableItem
        item={item.province}
        onSubmit={() => handleToggleModal(item.province)}
      />
    ) : null;

  useEffect(() => {
    handleGetProvinces();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header title={route.params.title} back={() => navigation.goBack()} />

        {/* Provinces */}
        <Text style={styles.region}>List of Provinces:</Text>

        {/* Lists */}
        {loadingData ? (
          <ActivityIndicator size="large" color="#6cf" />
        ) : provinces.length === 1 && !provinces[0].province ? (
          <EmptyHeader />
        ) : (
          <FlatList
            data={provinces}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            ListFooterComponent={() => <View style={styles.bottomComponent} />}
            ListEmptyComponent={() => <EmptyHeader />}
          />
        )}
      </View>

      {/* Modal view for airline details */}
      <ModalView visible={isModalVisible} toggle={handleToggleModal}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#6cf" />
        ) : (
          <View>
            <View style={styles.provinceContainer}>
              <CovidIcon style={styles.covidIcon} color="#F26737" />
              <Text style={styles.provinceLabel}>{activeProvince}</Text>
            </View>
            <Text style={styles.dateLabel}>
              {handleNullChecker(moment(covidDetails.date).format('LL'))}
            </Text>
            <Text style={styles.textPrimary}>
              Active Cases:{' '}
              {handleNullChecker(numberWithComma(covidDetails.active))}
            </Text>
            <Text style={styles.textPrimary}>
              Confirmed Cases:{' '}
              {handleNullChecker(numberWithComma(covidDetails.confirmed))}
            </Text>
          </View>
        )}
      </ModalView>
    </>
  );
};

export default CovidProvinces;
