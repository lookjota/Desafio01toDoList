import { Image, Text, StyleSheet, Platform, ActivityIndicator, View, StatusBar } from 'react-native';


import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { theme } from '../theme';
import { HomeScreen2 } from '../screens';
import { Loading } from '../components/Loading';

export default function HomeScreen() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })


  return (
    <>
      {fontsLoaded ? <HomeScreen2/> : <Loading/>}
      <StatusBar style="auto"/>
    </>
  );
}


