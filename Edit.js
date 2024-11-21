import React, { useState } from 'react';
import { datasource } from './Data.js';
import { View, Button, Text, TextInput, StyleSheet, Alert } from 'react-native';

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={styles.container}>
            <Text>Letter:</Text>
            <TextInput
                value={letter}
                maxLength={1}
                style={styles.textInput}
                onChangeText={(text) => setLetter(text)}
            />
            <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                    <Button title="Save" onPress={() => {
                        let indexnum = 1
                        if (route.params.type=="Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data[route.params.index].key=letter;
                        navigation.navigate('Home')
                    }
                    }/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.type == "Vowels") {
                                indexnum = 0;
                            }
                            Alert.alert("Are you sure?", '',
                                [{text:'Yes', onPress: () => {
                                        datasource[indexnum].data.splice(route.params.index, 1);
                                        navigation.navigate('Home');
                                    }},
                                {text:'No'}])
                        }}
                    />
                </View>
r
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textInput: {
        borderWidth: 1,
        marginBottom: 20,
        padding: 5,
        borderRadius: 4,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default Edit;
