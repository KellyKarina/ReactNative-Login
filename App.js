import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button, Alert, ScrollView, Platform, Pressable } from 'react-native';

const logo = require('./assets/React-icon.svg.png')

export default function App() {
  return (

    <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
      <ScrollView>

        <View style={styles.centalizarImg}>
          <Image style={{ width: 225, height: 200, marginTop: 120,}} source={logo}></Image>
          <StatusBar style="light" />
        </View>

        <View>
          <Text style={styles.labelInput}>Login</Text>
          <TextInput placeholder='Digite seu nome de usúario' style={styles.input}></TextInput>
          <Text style={styles.labelInput}>Senha</Text>
          <TextInput placeholder='Digite a sua senha' style={styles.input} secureTextEntry={true}></TextInput>
        </View>

        <View style={[styles.alinharHorizontal]}>
          <Button title='ENTRAR' color='white' onPress={() => Alert.alert('SEJA BEM VINDO!', 'Login realizado com sucesso.',
            [
              {
                text: 'Cancelar',
                onPress: () => console.log('Botão cancelar pressionado')
              },
              {
                text: 'OK',
                onPress: () => console.log('Botão OK pressionado')
              }
            ])}></Button>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centalizarImg:{
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#87CEFA',
  },
  labelInput: {
    fontSize: 18,
    marginBottom: 1,
    color: 'white',
    marginBottom: 5,
    marginTop: 50,
  },
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  alinharHorizontal: {
    gap: 10,
    marginTop: 50,
  },
});