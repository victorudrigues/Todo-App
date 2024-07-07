import { SafeAreaView } from "react-native";
import Home from "./src/screens/Home";
import {  useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Home/>
    </SafeAreaView>
  );
}

