import React, { useEffect, useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import Item from "../components/Item";
import userService from "../services/user.service";
const Data = [
    {
        id: 1,
        name: 'lam',
    },
    {
        id: 2,
        name: 'lam-1'
    }
]

export default function TodoScreen() {
    const [name, onChangeName] = React.useState();
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const res = await userService.getUsers();
        setUsers(res);
    }
    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    useEffect(() => {
        getUsers();
      }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>List user of system</Text>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.hr}/>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder="name user"
                />
                <View  style={styles.btn}>
                    <Button
                        title="Add"
                        color="#228B22"
                        accessibilityLabel="add user"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      display: "flex",
      flexDirection: "column"
    },
    content: {
        margin: 50,
    },
    title : {
        textAlign: "center",
        marginBottom: 30,
        fontSize: 30,
        fontWeight: "500"
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        margin: 10,
        marginTop: 50
    },
    input: {
        borderStyle: "solid",
        borderWidth: 0.5,
        width: 150,
        borderRadius: 5,
        padding: 5
    },
    form: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 50
    },
    btn: {
        width: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }
  });