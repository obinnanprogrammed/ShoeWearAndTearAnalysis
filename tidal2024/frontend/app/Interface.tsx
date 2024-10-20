import { Text, View, ImageBackground, Pressable, TouchableHighlight, Image } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useFonts, Manjari_400Regular } from '@expo-google-fonts/manjari';

export default function Interface() {
    const router = useRouter();
    let [fontsLoaded, fontError] = useFonts({
        Manjari_400Regular
    })

    if(!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <ImageBackground source={require('../assets/images/TASWATAAOA-background.png')} style={styles.background}>
            <View style={styles.container}>
                <Pressable style={[styles.button, { position: "absolute", bottom: 30, left: 10 }]} onPress={() => router.push("/")}>
                    <Text style={styles.text}>Go Home</Text>
                </Pressable>
                <Text style={[styles.text, { fontSize: 20 }]}>Tap the shoes to upload your image!</Text>
                <TouchableHighlight onPress={() => console.log("Pressed.")}>
                    <Image style={{
                        resizeMode: "cover",
                        height: 192,
                        width: 250
                    }}source={require('../assets/images/sneaker.png')} />
                </TouchableHighlight>
            </View>
        </ImageBackground>
        
    )
}


/*
Use TouchableOpacity to convert shoe image into a button
Should we have shoes everywhere?
*/