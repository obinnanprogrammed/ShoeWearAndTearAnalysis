import { Text, View, ImageBackground, Pressable } from "react-native";
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
        <Text style={[styles.text, { fontSize: 30 }]}>The Amazing Shoe Wear and Tear Analysis App of Awesomeness</Text>
        <Pressable style={styles.button} onPress={() => router.push("./Interface")}><Text style={styles.text}>Get Started</Text></Pressable>
        <Text style={[styles.text, { fontSize: 15 }]}>Want to know whether your shoes are still good to wear? Tap the button above!</Text>
      </View>
    </ImageBackground>
  );
}

// background color: #4A2500
// text color: white
// apply similar animations as ScalesGalore
// animate shoe to be image upload button