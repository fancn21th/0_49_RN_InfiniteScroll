import {
    StyleSheet,
} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    listItem: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#d6d7da",
        padding: 6
    },
    imageWrapper: {
        padding: 5
    },
    title: {
        fontSize: 20,
        textAlign: "left",
        margin: 6
    },
    subtitle: {
        fontSize: 10,
        textAlign: "left",
        margin: 6
    }
})