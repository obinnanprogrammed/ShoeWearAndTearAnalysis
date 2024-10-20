import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "Manjari_400Regular",
        color: "white",
        textAlign: "center"
    },
    button: {
        backgroundColor: "orange",
        borderRadius: 15,
        paddingHorizontal: 25,
        paddingVertical: 10,
        margin: 10,
        elevation: 8
    }
});