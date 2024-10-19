import { Text, View, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Interface() {
    const router = useRouter();
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Text>Interface screen.</Text>
            <Button title="To Home" onPress={() => router.push("/")} />
        </View>
    )
}