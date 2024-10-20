import { useState } from 'react';
import { Text, View, ImageBackground, Pressable, TouchableHighlight, Image } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useFonts, Manjari_400Regular } from '@expo-google-fonts/manjari';
import * as ImagePicker from 'expo-image-picker';

export default function Interface() {
    const router = useRouter();
    const [image, setImage] = useState<string | null>(null);
    let [fontsLoaded, fontError] = useFonts({
        Manjari_400Regular
    })

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);
        if(!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

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
                <TouchableHighlight onPress={selectImage}>
                    <Image style={{
                        resizeMode: "cover",
                        height: 192,
                        width: 250
                    }}source={require('../assets/images/sneaker.png')} />
                </TouchableHighlight>
                {image && <Image source={{uri: image}} style={{ margin: 20, width: 200, height: 200 }} />}
                {image && <Text style={styles.text}>Your picture is ready. Click Next to evaluate.</Text>}
                {image && <Pressable style={styles.button} onPress={() => console.log("Pressed")}><Text style={styles.text}>Next</Text></Pressable>}
            </View>
        </ImageBackground>
        
    )
}


/*
Use TouchableOpacity to convert shoe image into a button
Should we have shoes everywhere?
*/