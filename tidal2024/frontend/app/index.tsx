import { Text, View, Button, ImageBackground } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useFonts, Manjari_400Regular } from '@expo-google-fonts/manjari';

export default function Welcome() {
  const router = useRouter();
  let [fontsLoaded, fontError] = useFonts({
    Manjari_400Regular
  })

  if(!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ImageBackground source={require('../assets/images/TASWATAAOA-background.png')} style={styles.background}>
      <View style = {styles.container}>
        <Text style={[styles.text, { fontSize: 45 }]}>Welcome screen.</Text>
        <Button title="To Interface" onPress={() => router.push("/Interface")} />
      </View>
    </ImageBackground>
    
  );
}

// background color: #4A2500
// text color: white
// apply similar animations as ScalesGalore
// animate shoe to be image upload button