import React,{useState} from 'react';
import {datasource} from './Data.js';
import { StatusBar, View, Button, Text, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const[letter,setLetter] = useState("");
    const[type,setType] = useState("Vowels");

    return (
        <View>
            <Text>Add Letter:</Text>
            <TextInput placeholder="Enter a letter" maxLength={1} style={{borderWidth:1}} onChangeText={(text)=>setLetter(text)}/>
            <RNPickerSelect
                itemKey={type}
                onValueChange={(value)=>setType(value)}
                items={[
                    {label:"Vowels", value:"Vowels", key:"Vowels"},
                    {label:"Consonants", value:"Consonants", key:"Consonants"}
                ]}
            />
            <Button title='Submit'
                    onPress={() => {
                        let item = {key:letter};
                        let indexnum = 1;
                        if (type == "Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data.push(item);
                        navigation.navigate('Home');
                    }}
            />
        </View>
    );
}

export default Add;
