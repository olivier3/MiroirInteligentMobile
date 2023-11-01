import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppTheme from '../styles/AppTheme';
import Hour from '../components/datetime/Hour';
import Calendar from '../components/datetime/Calendar';
import useDateTime from 'miroirPackage/Hooks/UseDateTime'
import Weather from '../components/weather/Weather';
import NoConnection from '../components/NoConnection';

export default function MirroirScreen() {

  const {date} = useDateTime();
  return (
    <View style={styles.background}>
      <NoConnection />

      <View className="flex-col items-end p-2" >
        <View className="border-b-2 border-white">
          <Hour className="" date={date}/>
          <Calendar className="" date={date}/>
        </View>
        <Weather className=""/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: AppTheme.backColor,
    width: '100%',
    height: '100%',
  },

});
