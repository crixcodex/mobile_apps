import React, {useState} from 'react';
import {View, Text, Linking} from 'react-native';
import DefaultStyle from './style';
import {Button, TextInput} from 'react-native-paper';

export default function App() {
  const [name, setName] = useState('CHIMA CHRISTIAN');
  return (
    <View style={DefaultStyle.body}>
      <View style={DefaultStyle.container}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TextInput
            style={DefaultStyle.input}
            mode="outlined"
            // inputMode=''
            placeholder="0"
            textAlign="center"
            onChangeText={e => setName(e)}
          />
          <TextInput
            style={DefaultStyle.input}
            mode="outlined"
            placeholder="0"
            textAlign="center"
            onChangeText={e => setName(e)}
          />
          <TextInput
            style={DefaultStyle.input}
            mode="outlined"
            placeholder="0"
            textAlign="center"
            onChangeText={e => setName(e)}
          />
          <TextInput
            style={DefaultStyle.input}
            mode="outlined"
            placeholder="0"
            textAlign="center"
            onChangeText={e => setName(e)}
          />
          <TextInput
            style={DefaultStyle.input}
            mode="outlined"
            placeholder="0"
            textAlign="center"
            onChangeText={e => setName(e)}
          />
        </View>

        <Text style={{marginBottom: 10, paddingStart: 2}}>
          Didn't receive any code ? Resend Code
        </Text>
        <Button
          icon="camera"
          onPress={() => {
            Linking.openURL('https://dashboard.yubafrica.cloud');
          }}
          loading={false}
          mode="elevated"
          style={DefaultStyle.__btn}
          textColor="#ffffff"
          buttonColor="#5a0ad2">
          VERIFY OTP
        </Button>
      </View>
    </View>
  );
}
