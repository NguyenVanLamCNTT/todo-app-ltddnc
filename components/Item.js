import { Button, StyleSheet, Text, View } from "react-native";


export default function Item(props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>{props.item.id}</Text>
            </View>
            <View style={styles.content}>
                <Text>{props.item.name}</Text>
            </View>
            <Button
                title="Remove"
                color="#FF0000"
                accessibilityLabel="remove user"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }
  });