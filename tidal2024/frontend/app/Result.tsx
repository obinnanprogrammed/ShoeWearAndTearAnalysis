import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View, ImageBackground, Pressable, Image, ImageSourcePropType } from 'react-native';
import { styles } from './styles';
import { useFonts, Manjari_400Regular } from '@expo-google-fonts/manjari';

export default function Result() {
    const router = useRouter();
    const params = useLocalSearchParams();
    let [fontsLoaded, fontError] = useFonts({
        Manjari_400Regular
    });

    // processing and stuff here
    const { img } = params;
    const imgUri = (typeof img === 'string' ? img : '');
    
    console.log(imgUri);
    if(!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ImageBackground source={require('../assets/images/TASWATAAOA-background.png')} style={styles.background}>
            <View style={styles.container}>
                <Pressable style={[styles.button, { position: 'absolute', top: 30, right: 10 }]} onPress={() => router.push('./Interface')}>
                    <Text style={styles.text}>Back</Text>
                </Pressable>
                {imgUri ? <Image source={{ uri: imgUri }} style={{ margin: 20, width: 200, height: 200 }} /> : <Text style={styles.text}>Image unavailable.</Text>}
                <Text style={[styles.text, { fontSize: 25}]}>Your shoes are....</Text>
                <Text style={[styles.text, { fontSize: 40 }]}>Good!</Text>
                <Text style={styles.text}>Your shoes are prime to wear for approximately 1 year.</Text>
                <Pressable style={[styles.button, { position: 'absolute', bottom: 30, left: 10 }]} onPress={() => router.push('/')}>
                    <Text style={styles.text}>Go Home</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}