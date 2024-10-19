import { Text, View, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome screen.</Text>
      <Button title="To Interface" onPress={() => router.push("/Interface")} />
    </View>
  );
}
