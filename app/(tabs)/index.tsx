

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { theme } from '../theme';
import { HomeScreen2 } from '../screens';
import { Loading } from '../components/Loading';
import { StatusBar } from 'expo-status-bar';

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


