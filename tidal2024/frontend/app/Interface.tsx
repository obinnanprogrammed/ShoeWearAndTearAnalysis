import { useState } from 'react';
import { Alert, Text, View, ImageBackground, Pressable, TouchableHighlight, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useFonts, Manjari_400Regular } from '@expo-google-fonts/manjari';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

/*
    TODO: create third screen (result screen)
    Pass image over
    Send image contents to backend
    Process on model
    Send results back
    This'll be lightwork
*/
export default function Interface() {
    const router = useRouter();
    const [image, setImage] = useState<string | null>(null);
    let [fontsLoaded, fontError] = useFonts({
        Manjari_400Regular
    });

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        console.log(result);
        if(!result.canceled) {
            setImage(result.assets[0].uri);
            //console.log(result.assets[0].uri);
        }
    };

    const sendImage = async () => {
        if(!image) { return; }

        try {
            const blob = await (await fetch(image)).blob();

            const fd = new FormData();
            const fileName = image.split('/').pop();

            fd.append('image', blob, fileName);
            /* probably will not be able to implement in time
            const backend = 'insert backend url here';
            const uploadResponse = await fetch(backend, {
                method: POST,
                body: formData
            });
            const data = await uploadResponse.json();
            // pass this to Result.tsx.
            */
        } catch(error) {
            console.error(error);
        }
    }
    if(!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <ImageBackground source={require('../assets/images/TASWATAAOA-background.png')} style={styles.background}>
            <View style={styles.container}>
                <Pressable style={[styles.button, { position: 'absolute', bottom: 30, left: 10 }]} onPress={() => router.push('/')}>
                    <Text style={styles.text}>Go Home</Text>
                </Pressable>
                <Text style={[styles.text, { fontSize: 20 }]}>Tap the shoes to upload your image!</Text>
                <TouchableHighlight onPress={selectImage}>
                    <Image style={{
                        resizeMode: 'cover',
                        height: 192,
                        width: 250
                    }}source={require('../assets/images/sneaker.png')} />
                </TouchableHighlight>
                {image && <Image source={{uri: image}} style={{ margin: 20, width: 200, height: 200 }} />}
                {image && <Text style={styles.text}>Your picture is ready. Click Next to evaluate.</Text>}
                {image && <Pressable style={styles.button} onPress={() => router.push({ pathname: './Result', params: { img: 'https://t4.ftcdn.net/jpg/04/39/60/05/360_F_439600528_2FWTMQDiXYv6T0qolS57KSxiNbqlhDTa.jpg' }})}><Text style={styles.text}>Next</Text></Pressable>}
            </View>
        </ImageBackground>
        
    )
}
